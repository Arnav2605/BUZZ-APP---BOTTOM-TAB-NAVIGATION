import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import faceBookScreen from './screens/fb';
import instagramScreen from './screens/in';





export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    );
  }
} 

const TabNavigator = createBottomTabNavigator({
  faceBook: {screen: faceBookScreen},
  instaGram: {screen: instagramScreen}
});
const AppContainer= createAppContainer(TabNavigator);


