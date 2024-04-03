import React from "react";

import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.viewOneStyle}>Box Screen 1</Text>
      <Text style={styles.viewTwoStyle}>Box Screen 2 </Text>
      <Text style={styles.viewThreeStyle}>Box Screen 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewOneStyle: {
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    backgroundColor: "blue",
    alignSelf: "flex-end",
    height: 50,
    width: 50,
  },
  viewThreeStyle: {
    backgroundColor: "green",
    height: 50,
    width: 50,
  },
  // textStyle: {
  //   borderWidth: 2,
  //   borderColor: "red",
  //   marginVertical: 20,
  //   marginHorizontal: 20,
  // },
});
export default BoxScreen;
