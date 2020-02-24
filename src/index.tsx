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
