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

class MB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.MenuBar}>
          <Image source={require("../assets/barMenu/1.png")}></Image>
          <Image source={require("../assets/barMenu/2.png")}></Image>
          <View style={styles.HomeButton}>
            <Image
              style={styles.HomeButton}
              source={require("../assets/barMenu/3.png")}
            ></Image>
          </View>

          <Image source={require("../assets/barMenu/4.png")}></Image>
          <Image source={require("../assets/barMenu/5.png")}></Image>
        </View>
      </View>
    );
  }
}
export default MB;

const styles = StyleSheet.create({
  MenuBar: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  HomeButton: {
    marginTop: -28,
  },
});
