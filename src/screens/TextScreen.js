import React, { useState } from "react";

import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Enter Password : -</Text>

      <Text style={{ fontSize: 20 }}>YOUR PASSWOORD :-{password}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 Character</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 25,
    borderColor: "black",
    borderWidth: 3,
  },
});

export default TextScreen;
