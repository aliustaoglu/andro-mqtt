import React from 'react';
import { Text, View } from 'react-native';
import Index from './src/index';
import { NativeModules } from 'react-native';

export default class App extends React.Component {
  render() {
    NativeModules.Device.getDeviceName((err, name) => console.log(err, name));

    return <Index />;
  }
}
