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
import DropDownPicker from "react-native-dropdown-picker";
import { ModalDatePicker } from "react-native-material-date-picker";
import DatePicker from "./../helpers/DatePicker";
class PickerExample extends Component {
  state = { user: "" };
  updateUser = (user) => {
    this.setState({ user: user });
  };

  state = {
    email: "",
    password: "",
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("email: " + email + " password: " + pass);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.Logo}
          source={require("../assets/LogoAperHome.png")}
        />

        <Text style={styles.text}>{this.state.user}</Text>
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
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Birthday                                     "
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <DropDownPicker
          placeholder="Choose a gender"
          style={styles.dropDown}
          items={[
            { label: "N/A", value: "gender0" },
            { label: "Male", value: "gender1" },
            { label: "Female", value: "gender2" },
          ]}
          defaultIndex={0}
          containerStyle={styles.dropcontainer}
          onChangeItem={(gender) => console.log(gender.label, gender.value)}
        />
        <DatePicker></DatePicker>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.push("Splash")}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default PickerExample;

const styles = StyleSheet.create({
  datePicker: {
    flex: 1,
    borderWidth: 1,
  },
  dropcontainer: {
    height: 40,
    marginLeft: 0,
    marginBottom: 10,
  },
  dropDown: {
    height: 50,
    width: 200,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  Logo: {
    aspectRatio: 1.5,
    resizeMode: "contain",
    marginTop: -10,
  },
  picker: {
    flex: 0.3,
    height: 50,
    width: 150,
    marginLeft: 10,
    backgroundColor: "black",
    borderWidth: 20,
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
    color: "red",
  },
});
