import React from "react";
import { Button, DrawerLayoutAndroid, Text, View, KeyboardAvoidingView } from "react-native";
import { styles } from "./Home/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, ListItem } from "react-native-elements";

export default function Home({ navigation }) {

  const navigationView = (
    <View style={styles.navigationContainer}>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Profile')}>
         
        <Icon name='face' style={styles.profileIcon}  />
        <Text>Profile</Text>
        
      </TouchableOpacity>
    </View>
  );

  return (
    
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={"right"}
        renderNavigationView={() => navigationView}
        >
      </DrawerLayoutAndroid>
   
  );
};