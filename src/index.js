import React from 'react';
import { StackNavigator } from 'react-navigation';
import Main from './components/Main/Main'

const Index = StackNavigator(
  {
    Main: {
      screen: Main
    }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

export default Index;
