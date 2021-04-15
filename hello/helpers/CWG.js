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

class CWG extends Component {
  render() {
    return (
      <View style={styles.containerGlobal}>
        <View style={styles.CWGContainer}>
          <Text style={styles.TextCWGAndFP}>Mot de passe oublié ?</Text>
          <Text style={styles.TextCWG}>Ou</Text>
          <View style={styles.BoxCWG}>
            <View style={styles.CWGBox}></View>
            <Image
              style={styles.LogoGoogle}
              source={require("../assets/MoreIcon/LogoGoogle.png")}
            ></Image>
          </View>
          <Text style={styles.TextIV}>
            Pas de compte ?
            <Text style={styles.TextCWGAndFP}> Inscrivez-vous</Text>
          </Text>
        </View>
        <View style={styles.BOX}></View>
      </View>
    );
  }
}
export default CWG;

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
    marginTop: 100,
    marginBottom: 10,
    color: "#98C8E0",
  },

  containerGlobal: {
    backgroundColor: "#364F59",
  },
});
