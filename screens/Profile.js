import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          width: 300,
          justifyContent: 'center',
          height: 500,
        }}>
        <Text>Profile</Text>
      </View>
    );
  }
}