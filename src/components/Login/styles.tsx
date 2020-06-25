import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

// Login styles
export const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      width: '70%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 25,
      padding: 10
    },
    btnLogin: {
      marginTop: 10,
      backgroundColor: '#87C8E1',
      width: '70%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
      marginBottom: 8
    },
    txtLogin: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: 'bold'
    },
    txtRegister: {
      marginTop: 8,
      color: '#FFF',
      fontSize: 18,
    },
    iconImage: {
      width: '18%',
      marginTop: Constants.statusBarHeight,
      height: 90,
      marginBottom: 8,
    },
    iconText:{
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 24,
      marginBottom: 20 
    },
    backgroundImage:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: "cover",
      width: '120%',
      height: '120%',
      //blurRadius: 40 é um bug do react, esperar atualização.
    },
    facebookButton: {
      marginTop: 10,
      width: '50%'
    }
  });