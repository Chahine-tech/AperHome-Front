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
          <Text style={styles.lineAD}> ____________</Text>
          <Text style={styles.textContainer}>
            L'application parfaite pour commander{"\n"} de l'alchool et des
            appéritifs
          </Text>
          <Text style={styles.lineED}> ____________</Text>
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
    marginTop: 150,
  },
  lineED: {
    marginLeft: 170,
    marginTop: -5,
    fontWeight: "bold",
    color: "#F9B233",
  },
  lineAD: {
    marginLeft: -170,
    marginTop: -5,
    fontWeight: "bold",
    color: "#F9B233",
  },

  containerGlobal: {
    height: 900,
    marginTop: -150,
    backgroundColor: "#364F59",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },
  textContainer: {
    color: "white",
  },
});
