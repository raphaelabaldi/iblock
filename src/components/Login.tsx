import { KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text } from "react-native";

import React from 'react';
import { styles } from './styles'

export default function Login({ navigation }) {
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.container}>
  
          <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=> {}}
          />   
  
          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
  
          <TouchableOpacity style={styles.btnLogin}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.txtLogin}>Login</Text>          
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Text style={styles.txtRegister}>Criar uma conta</Text>
          </TouchableOpacity>
  
        </View>
      </KeyboardAvoidingView>
    )
  }