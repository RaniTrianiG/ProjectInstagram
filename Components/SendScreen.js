import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SendScreen extends Component {
    render() {
      return (
        <View>
            <Text>Ini halaman Send Screen</Text>
        </View>
      );
    }
    static navigationOptions = {
        title: 'SendScreen',
        headerStyle:{
            backgroundColor: 'white'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
}
  