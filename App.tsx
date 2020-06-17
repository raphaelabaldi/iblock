import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

function Space() {
  return <View style={styles.space} />;
}

export default class Login extends React.Component{
  render(){
    return (
      <SafeAreaView style={styles.container}> 
        <View>
          <Text style={styles.title}>
            Welcome do iBlock, all rights reserved.
          </Text>
          <Separator/>
        </View>
        <View style={styles.forButton}>
        <Button 
            title="Login"
            color="#00BFFF"
            onPress={() => Alert.alert('Not implemented')}
          />
        <Space/>
        <Button 
            title="Signin"
            color="#00BFFF"
            onPress={() => Alert.alert('Not implemented')}
          />
        </View>
      </SafeAreaView>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    alignItems: "center",
    backgroundColor: '#FFA500'
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  forButton: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});
