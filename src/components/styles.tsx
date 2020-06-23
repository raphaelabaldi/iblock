import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 50
    },
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919'
    },
    input: {
      backgroundColor: '#FFF',
      width: '90%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10
    },
    btnLogin: {
      backgroundColor: '#87CEEB',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 10
    },
    txtLogin: {
      color: "#191919",
      fontSize: 18
    },
    txtRegister: {
      color: '#FFF',
      fontSize: 18
    }
  });