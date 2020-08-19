import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> App2 </Text>
      </SafeAreaView>
    );
  }
}
