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

class OS extends Component {
  render() {
    return (
      <View style={styles.containerOther}>
        <View style={styles.Other}>
          <Image source={require("../assets/PopularBar/Other1.png")}></Image>
          <View style={styles.containerTextOther}>
            <Text style={styles.TextnameOther}>Crème au thon apéritive</Text>
            <Text style={styles.TextOtherType}>Appéritifs</Text>
            <Text style={styles.TextOtherRatingStar}>
              ⭐ 4.9 <Text style={styles.TextOtherRating}>(587 ratings)</Text>
            </Text>
          </View>
        </View>
        <View style={styles.Other}>
          <Image source={require("../assets/PopularBar/Other2.png")}></Image>
          <View style={styles.containerTextOther}>
            <Text style={styles.TextnameOther}>
              Tapas de noël au saumon,{"\n"} parmesan et jambon
            </Text>
            <Text style={styles.TextOtherType}>Appéritifs</Text>
            <Text style={styles.TextOtherRatingStar}>
              ⭐ 4.9 <Text style={styles.TextOtherRating}>(324 Ratings)</Text>
            </Text>
          </View>
        </View>
        <View style={styles.Other}>
          <Image source={require("../assets/PopularBar/Other3.png")}></Image>
          <View style={styles.containerTextOther}>
            <Text style={styles.TextnameOther}>
              Champignons farcis au boursin
            </Text>
            <Text style={styles.TextOtherType}>Appéritifs</Text>
            <Text style={styles.TextOtherRatingStar}>
              ⭐ 4.9 <Text style={styles.TextOtherRating}>(264 ratings)</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default OS;

const styles = StyleSheet.create({
  containerOther: {
    marginBottom: 50,
  },
  Other: {
    marginLeft: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#364F59",
  },
  containerTextOther: {
    marginLeft: 20,
  },

  TextnameOther: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#fff",
  },
  TextOtherType: {
    fontSize: 13,
    color: "#fff",
  },
  TextOtherRatingStar: {
    fontWeight: "normal",
    fontSize: 15,
    color: "#F9B233",
  },
  TextOtherRating: {
    fontWeight: "normal",
    fontSize: 15,
    color: "#fff",
  },
});
