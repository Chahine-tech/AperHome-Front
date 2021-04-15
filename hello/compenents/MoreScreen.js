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
      <View>
        <View style={styles.container}>
          <View style={styles.MSC}>
            <Text style={styles.title}>More</Text>
            <Image
              style={styles.IconShoppingCart}
              source={require("../assets/MoreIcon/6.png")}
            ></Image>
          </View>

          <View>
            <View>
              <View style={styles.RectangleContainer}>
                <View style={styles.Rectangle}>
                  <View style={styles.BoxIconText}>
                    <Image
                      style={styles.Icon}
                      source={require("../assets/MoreIcon/1.png")}
                    ></Image>
                    <Text style={styles.Text}>Payment Details</Text>
                  </View>
                  <View style={styles.CircleContainer}>
                    <View style={styles.Circle}>
                      <Text style={styles.TextCircle}> > </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.RectangleContainer}>
                <View style={styles.Rectangle}>
                  <View style={styles.BoxIconText}>
                    <Image
                      style={styles.Icon}
                      source={require("../assets/MoreIcon/2.png")}
                    ></Image>
                    <Text style={styles.Text}>My Orders</Text>
                  </View>
                  <View style={styles.CircleContainer}>
                    <View style={styles.Circle}>
                      <Text style={styles.TextCircle}> > </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.RectangleContainer}>
                <View style={styles.Rectangle}>
                  <View style={styles.BoxIconText}>
                    <Image
                      style={styles.Icon}
                      source={require("../assets/MoreIcon/3.png")}
                    ></Image>
                    <Text style={styles.Text}>Notifications</Text>
                  </View>
                  <View style={styles.CircleContainer}>
                    <View style={styles.Circle}>
                      <Text style={styles.TextCircle}> > </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.RectangleContainer}>
                <View style={styles.Rectangle}>
                  <View style={styles.BoxIconText}>
                    <Image
                      style={styles.Icon}
                      source={require("../assets/MoreIcon/4.png")}
                    ></Image>
                    <Text style={styles.Text}>Inbox</Text>
                  </View>
                  <View style={styles.CircleContainer}>
                    <View style={styles.Circle}>
                      <Text style={styles.TextCircle}> > </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.RectangleContainer}>
                <View style={styles.Rectangle}>
                  <View style={styles.BoxIconText}>
                    <Image
                      style={styles.Icon}
                      source={require("../assets/MoreIcon/5.png")}
                    ></Image>
                    <Text style={styles.Text}>Info</Text>
                  </View>
                  <View style={styles.CircleContainer}>
                    <View style={styles.Circle}>
                      <Text style={styles.TextCircle}> > </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.RectangleBox}></View>
      </View>
    );
  }
}
export default More;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#364F59",
  },
  MSC: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  IconShoppingCart: {
    marginRight: 10,
    marginTop: 35,
  },
  title: {
    marginLeft: 10,
    marginTop: 30,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  Rectangle: {
    width: 250,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  RectangleContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  BoxIconText: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  Text: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  Icon: {
    marginLeft: 15,
  },
  Circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  TextCircle: {
    marginLeft: 7,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  CircleContainer: {
    marginTop: -25,
    marginLeft: 235,
  },
});
