import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet,  View } from 'react-native';
import {Text,TextInput,Button} from 'react-native-paper';
import {useState} from 'react';
import Header from '~/components/Header';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen() {
    const [emailtxt,setEmailtxt] = useState("")
    const [passtxt,setPasstxt] = useState("")
  return (
    <>
      <Header/>
      <TextInput style={styles.text}
      label="Email"
      mode='flat'
      placeholder = 'Email ici'
      onChangeText = {emailtxt => setEmailtxt(emailtxt)}
      keyboardType='email-address'
      ></TextInput>
      
      <TextInput 
      style={styles.text}
      label="Password"
      value = {passtxt}
      secureTextEntry={true}
      onChangeText = {passtxt => setPasstxt(emailtxt)}
      
      ></TextInput>
      <Button style={styles.button}>Envoyer</Button>
     
    </>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    width: '90%',
    marginTop: 10,
    borderRadius: 15,
    
  }, 
  button: {
    width: '90%',
    marginTop: 20,
    backgroundColor: 'red'
  }, 
});
