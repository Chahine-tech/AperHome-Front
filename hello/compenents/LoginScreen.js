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
      <View style={styles.containerGlobal}>
        <View style={styles.container}>
          <Image
            style={styles.Logo}
            source={require("../assets/LogoAperHome.png")}
          ></Image>
          <Text style={styles.textContainer}>Bienvenue </Text>
          <Text style={styles.line}> ______________________________</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Email                                           "
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Password                                   "
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
        </View>

        <View style={styles.BOX}></View>
      </View>
    );
  }
}
export default PickerExample;

const styles = StyleSheet.create({
  CWGContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  TextCWG: {
    marginBottom: 5,
    marginTop: 15,
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
  TextIV: {
    marginBottom: 500,
    marginTop: 45,
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
    marginLeft: 15,
  },
  LogoGoogle: {
    marginLeft: 40,
    aspectRatio: 1,
    marginTop: -30,
  },
  BoxCWG: {},
  CWGBox: {
    width: 90,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#CE5643",
  },
  TextCWGAndFP: {
    marginTop: 80,
    marginBottom: 10,
    color: "#98C8E0",
  },
  Logo: {
    aspectRatio: 3,
    resizeMode: "contain",
    marginTop: -10,
  },
  line: {
    marginTop: -5,
    fontWeight: "bold",
    color: "#F9B233",
  },
  textContainer: {
    marginTop: 20,
    fontSize: 25,
    color: "white",
  },
  containerGlobal: {
    backgroundColor: "#364F59",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "rgba(52, 52, 52, 0.8)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
