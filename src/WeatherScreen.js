// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { getCurrentWeather } from './WeatherService';

class WeatherScreen extends Component<{}> {
  componentDidMount() {
    getCurrentWeather('Tokyo')
      .then(current => console.log(current));
  }

  render() {
    return <View />;
  }
}

export default WeatherScreen;
