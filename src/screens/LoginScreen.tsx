import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

import Header from "~/components/Header";
import { Routes } from "~/navigation/Routes";

export default function LoginScreen(props) {
  const [emailtxt, setEmailtxt] = useState("");
  const [passtxt, setPasstxt] = useState("");

  function navigateToTerms() {
    props.navigation.navigate(Routes.TERMS_SCREEN);
  }
  function navigateToStarshipfeed() {
    props.navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }

  return (
    <>
      <Header />
      <TextInput
        style={styles.text}
        label="Email"
        mode="flat"
        placeholder="Email ici"
        onChangeText={(emailtxt) => setEmailtxt(emailtxt)}
        keyboardType="email-address"
      ></TextInput>

      <TextInput
        style={styles.text}
        label="Password"
        value={passtxt}
        secureTextEntry={true}
        onChangeText={(passtxt) => setPasstxt(emailtxt)}
      ></TextInput>
      <Button
        style={styles.button}
        onPress={navigateToStarshipfeed}
      >
        Envoyer
      </Button>
      <TouchableOpacity onPress={navigateToTerms}>
        <Text> condition</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    marginTop: 20,
    width: "90%",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 24,
    textAlign: "center",
  },
  text: {
    borderRadius: 15,
    marginTop: 10,
    width: "90%",
  },
});
