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
