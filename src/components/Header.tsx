import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Header() {
  const [emailtxt, setEmailtxt] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Ma première application ffccxvsds</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    backgroundColor: "purple",
    justifyContent: "center",
    width: "100%"
  },
  paragraph: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    margin: 24,
    textAlign: "center"
  }
});
