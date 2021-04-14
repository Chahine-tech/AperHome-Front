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
import PBB from "../helpers/PopularBarBox";
import OS from "../helpers/OtherScreen";

class DashBoard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titlePres}>Good morning</Text>
        <View style={styles.Cat1}>
          <Image
            style={styles.box}
            source={require("../assets/composant.png")}
          ></Image>
          <Image
            style={styles.box}
            source={require("../assets/composant2.png")}
          ></Image>
          <Image
            style={styles.box}
            source={require("../assets/composant3.png")}
          ></Image>
          <Image
            style={styles.box}
            source={require("../assets/composant4.png")}
          ></Image>
        </View>
        <View style={styles.TextBoxContainer}>
          <Text style={styles.Textbox}>Offres</Text>
          <Text style={styles.Textbox}>Vins</Text>
          <Text style={styles.Textbox}>Bières</Text>
          <Text style={styles.Textbox}>Autres</Text>
        </View>
        <View style={styles.TitleCategory}>
          <Text style={styles.title}>Popular Bars</Text>
          <Text style={styles.textViewAll}>View All</Text>
        </View>
        <PBB />
        <View style={styles.TitleCategory}>
          <Text style={styles.title}>Most Popular</Text>
          <Text style={styles.textViewAll}>View All</Text>
        </View>
        <View style={styles.StarterCategory}>
          <Image
            style={styles.imageStarter}
            source={require("../assets/PopularBar/Starter1.png")}
          ></Image>
          <Image
            style={styles.imageStarter2}
            source={require("../assets/PopularBar/Starter2.png")}
          ></Image>
        </View>
        <View style={styles.textStarterContainer}>
          <Text style={styles.textStarter}>
            Rouleaux de printemps {"\n"} simplifiés
          </Text>
          <Text style={styles.textStarter2}>
            Blinis au saumon fumé {"\n"}sous son lit de neige
          </Text>
        </View>
        <View style={styles.TitleCategory}>
          <Text style={styles.title}>Recent Items</Text>
          <Text style={styles.textViewAll}>View All</Text>
        </View>
        <OS></OS>
      </View>
    );
  }
}
export default DashBoard;

const styles = StyleSheet.create({
  box: { marginRight: 10 },
  Textbox: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#fff",
  },
  TextBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Cat1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginTop: 30,
  },
  titlePres: {
    marginTop: 30,
    marginLeft: 10,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  textViewAll: {
    marginTop: 30,
    marginLeft: 190,
    textAlign: "left",
    fontWeight: "normal",
    fontSize: 14,
    color: "#F9B233",
  },
  title: {
    marginTop: 30,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  TitleCategory: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  StarterCategory: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageStarter: {
    marginRight: 100,
  },
  textStarterContainer: {
    marginLeft: -70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStarter: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
    marginLeft: 70,
    marginRight: 20,
  },
  textStarter2: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 15,
    color: "#fff",
  },
});
