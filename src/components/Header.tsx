import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet,  View } from 'react-native';
import {Text,TextInput,Button} from 'react-native-paper';
import {useState} from 'react';

export default function Header() {
    const [emailtxt,setEmailtxt] = useState("")
    return (
      <View style={styles.container}>
        <Text 
          style={styles.paragraph}>
          Ma première application ffccxvsds
        </Text>
     </View>
    );
}
    const styles = StyleSheet.create({
        container: {
         
          backgroundColor: 'purple',
          
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          
        },
        paragraph: {
          margin: 24,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          color:'#fff',
          
        },

       
      });
