import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 20,
      backgroundColor: "#FFF",
      padding: 8
    },
    navigationContainer: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: "#BABABA",
      padding: 8
    },
    profileIcon:{
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 1,
      marginVertical:1,
    },
  });