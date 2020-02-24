# Async MobX

./weatherStore.ts

```ts
import {
  configure, // set some global mobx config settings
  action,
  observable,
  runInAction, // inlining an action within another function
  flow, // using generators and yield to run in action
  decorate, // not needing to use decorators to decorate functions
} from "mobx";

configure({ enforceActions: true });

class WeatherStore {
  weatherData = {};

  loadWeather = (city: string) => {
    fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`,
    )
      .then(response => response.json())
      .then(data => {
        this.setWeather(data);
      });
  };

  asyncLoadCity = async (city: string) => {
    try {
      const json = await fetch(
        `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`,
      );

      const data = await json.json();

      runInAction(() => {
        this.weatherData = data;
      });
    } catch (error) {
      console.error(error);
    }
  };

  generatorLoadCity = flow(function*(city: string) {
    const json = yield fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`,
    );

    const data = yield json.json();

    // @ts-ignore
    this.weatherData = data;
  }).bind(this);

  setWeather(data: any) {
    this.weatherData = data;
  }
}

decorate(WeatherStore, {
  weatherData: observable,
  setWeather: action,
});

export const weatherStore = new WeatherStore();
```

./App.tsx

```ts
import * as React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";

import { weatherStore } from "./stores/weatherStore";
import "./styles.css";

@observer
class App extends React.Component<any> {
  state = {
    city: "",
  };

  render() {
    const {
      weatherData,
      loadWeather,
      asyncLoadCity,
      generatorLoadCity,
    } = this.props.store;

    return (
      <>
        <input
          onChange={e => this.setState({ city: e.target.value })}
          placeholder="city"
        />
        <button
          onClick={() => {
            const { city } = this.state;
            if (city && city.trim()) {
              // loadWeather(city);
              // asyncLoadCity(city);
              generatorLoadCity(city);
            }
          }}
        >
          fetch
        </button>
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App store={weatherStore} />, rootElement);
```
