import React, { Component } from "react";
import {
  View,
  Text,
  Picker,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

class PickerExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/Artboard5.png")}
        ></Image>
        <View style={styles.circle}></View>
        <Text style={styles.titlePres}>Find the alcohol You Love</Text>
        <Text style={styles.textPres}>
          Discover the best alcohol from {"\n"} over 350 bars at your doorstep
        </Text>
      </View>
    );
  }
}
export default PickerExample;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },
  image: {
    marginTop: 80,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 10,
  },
  circle: {
    backgroundColor: "#F9B233",
    borderRadius: 50,
    width: 15,
    height: 15,
    marginBottom: 20,
  },
  titlePres: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  textPres: {
    marginTop: 60,
    fontSize: 14,
    color: "#fff",
    textAlign: "left",
  },
});
