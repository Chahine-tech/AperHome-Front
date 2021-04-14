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

class PBB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.BarImageBox}>
          <View style={styles.containerBar}>
            <Image
              style={styles.BarImage}
              source={require("../assets/PopularBar/Bar1.png")}
            />
            <Text style={styles.TextBarName}> La Cave des Papilles</Text>
            <View style={styles.BarRatingLine}>
              <Text style={styles.TextBarRating}> ⭐ 4.9</Text>
              <Text style={styles.TextBarAdrs}>
                {" "}
                <Text style={styles.TextBullet}>•</Text> 35 Rue Daguerre, 75014
                Paris
              </Text>
              <Text style={styles.TextBarType}>
                {" "}
                <Text style={styles.TextBullet}>•</Text> Digestifs
              </Text>
            </View>
          </View>
          <View style={styles.containerBar}>
            <Image
              style={styles.BarImage}
              source={require("../assets/PopularBar/Bar2.png")}
            />
            <Text style={styles.TextBarName}> La Maison du Whiskey</Text>
            <View style={styles.BarRatingLine}>
              <Text style={styles.TextBarRating}> ⭐ 4.8</Text>
              <Text style={styles.TextBarAdrs}>
                <Text style={styles.TextBullet}>•</Text> 20 Rue d'Anjou, 75008
                Paris
              </Text>
              <Text style={styles.TextBarType}>
                <Text style={styles.TextBullet}>•</Text> Digestifs
              </Text>
            </View>
          </View>
          <View style={styles.containerBar}>
            <Image
              style={styles.BarImage}
              source={require("../assets/PopularBar/Bar3.png")}
            />
            <View style={styles.containerTextBar}>
              <Text style={styles.TextBarName}> La Taverne</Text>
              <View style={styles.BarRatingLine}>
                <Text style={styles.TextBarRating}> ⭐ 4.7</Text>
              </View>
              <Text style={styles.TextBarAdrs}>
                <Text style={styles.TextBullet}>•</Text> 24 Boulevard des
                Italiens, 75009 Paris
              </Text>
              <Text style={styles.TextBarType}>
                <Text style={styles.TextBullet}>•</Text> Appéritifs
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default PBB;

const styles = StyleSheet.create({
  containerBar: {
    marginTop: 10,
    marginLeft: 15,
  },
  TextBullet: {
    color: "#F9B233",
  },
  TextBarRating: {
    marginRight: 10,
    color: "#F9B233",
  },
  TextBarType: {
    marginRight: 10,
    color: "#fff",
  },
  TextBarAdrs: {
    marginRight: 10,
    color: "#fff",
  },
  BarRatingLine: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  TextBarName: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
  },
});
