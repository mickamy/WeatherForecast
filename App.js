// @flow
import { StackNavigator } from 'react-navigation';
import CityListScreen from './src/CityListScreen';
import WeatherScreen from './src/WeatherScreen';

const routes = {
  CityList: {
    screen: CityListScreen,
    navigationOptions: {
      title: '都道府県一覧',
    },
  },
  Weather: {
    screen: WeatherScreen,
  },
};

const config = {
  initialRouteName: 'CityList',
};

const App = StackNavigator(routes, config);

export default App;
