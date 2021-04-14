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

class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>More</Text>
      </View>
    );
  }
}
export default More;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
