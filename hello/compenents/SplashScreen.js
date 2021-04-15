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

class SC extends Component {
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
export default SC;

const styles = StyleSheet.create({
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

  containerGlobal: {
    backgroundColor: "#364F59",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },

});
