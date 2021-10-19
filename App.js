import React, { Component } from 'react'
import {
  View,
} from 'react-native'
import { Provider } from 'react-redux';
import store from './src/Store'
import Navigation from './src/Navigation/index'
import NavigationService from './src/Service/navigationService'
import ScreenHome from "./src/Screens/ScreenHome";
import ScreenLogin from "./src/Screens/ScreenLogin";
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {/* <Navigation
            ref={navigatorRef =>
              NavigationService.setTopLevelNavigator(navigatorRef)
            }
          /> */}
          {/* <Testing/> */}
          {/* <ScreenHome /> */}
        </View>
      </Provider>
    );
  }
}