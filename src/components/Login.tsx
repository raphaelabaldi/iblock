import { KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text, Image, ImageBackground } from "react-native";

import { SocialIcon } from 'react-native-elements';
import React from 'react';
import { styles } from './Login/styles';

export default function Login({ navigation }) {
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
                   
          <ImageBackground 
          source = {require('../../assets/background.png')}
          style={styles.backgroundImage
          }
          >           

          <Image
            style={styles.iconImage}
            source = {require('../../assets/icon.png')}
          />

          <Text style={styles.iconText}>
            i b l o c k
          </Text>
  
          <TextInput
          style={styles.input}
          placeholder="username"
          autoCorrect={false}
          onChangeText={()=> {}}
          />   
  
          <TextInput
          style={styles.input}
          placeholder="password"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
  
          <TouchableOpacity style={styles.btnLogin}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txtLogin}>L o g i n</Text>          
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.txtRegister}>Criar uma conta</Text>
          </TouchableOpacity>

          <View>          
            <SocialIcon style={styles.facebookButton}
              title='Login with Facebook     '
              button
              type='facebook'
            />
          </View>
  
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    )
  }