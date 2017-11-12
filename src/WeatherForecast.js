// @flow

export default class WeatherForecast {
  date: Date;
  temperature: number;
  humidity: number;
  description: string;
  iconURL: string;

  constructor(props: *) {
    const { dt, main, weather } = props;
    this.date = new Date(dt * 1000);
    this.temperature = Math.round(main.temp - 273.15);
    this.humidity = main.humidity;
    this.description = weather[0].description;
    this.iconURL = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
  }
}
