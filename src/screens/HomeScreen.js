import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate("Components")}
          title="Go to Components Demo"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate("List")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate("Image")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate("Counter")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Color Demo"
          onPress={() => navigation.navigate("Color")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Square Demo"
          onPress={() => navigation.navigate("Square")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Text Demo"
          onPress={() => navigation.navigate("Text")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Box Demo"
          onPress={() => navigation.navigate("Box")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonWrapper: {
    marginBottom: 10,
    width: "100%", // Ensure buttons take the full width
  },
});

export default HomeScreen;
