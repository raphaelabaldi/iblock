import { KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './src/styles'

export default function App() {
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

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txtRegister}>Criar uma conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}