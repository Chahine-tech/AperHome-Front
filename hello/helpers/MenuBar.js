import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import MoreScreen from "../compenents/MoreScreen";

class MB extends Component {
  render() {
    return (
      <View style={styles.Parentcontainer}>
        <View style={styles.container99}>
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
        <View style={styles.BOX}></View>
      </View>
    );
  }
}
export default MB;

const styles = StyleSheet.create({
  container99: {
    marginTop: 10,
    backgroundColor: "#364F59",
  },
  MenuBar: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  HomeButton: {
    marginTop: -28,
  },
  Parentcontainer: {
    backgroundColor: "#364F59",
  },
});
