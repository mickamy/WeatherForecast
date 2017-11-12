// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import {
  getCurrentWeather,
  getWeatherForecast,
} from './WeatherService';

type State = {
  current: ?CurrentWeather,
  forecasts: WeatherForecast[],
};

class WeatherScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { current: null, forecasts: [] };
  }

  componentDidMount() {
    const tokyo = 'Tokyo';
    getCurrentWeather(tokyo)
      .then(current => this.setState({ current }));
    getWeatherForecast(tokyo)
      .then(forecasts =>
        this.setState({ forecasts }));
  }

  render() {
    const { current } = this.state;
    if (current == null) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    const { main, iconURL } = current;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {main}
        </Text>
        <Image
          source={{ uri: iconURL }}
          style={styles.icon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 8,
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default WeatherScreen;
