import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./compenents/SplashScreen";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },
  containerSplash: {
    backgroundColor: "#364F59",
  },
  Logo: {
    aspectRatio: 1.5,
    resizeMode: "contain",
    marginTop: -600,
  },
  submitButton2: {
    marginTop: 2000,
    backgroundColor: "#F9B233",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText2: {
    color: "white",
  },
  submitButton: {
    marginTop: 100,
    backgroundColor: "#F9B233",
    padding: 10,
    margin: 15,
    height: 40,
    width: 250,
    borderRadius: 50,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  submitButtonText: {
    color: "white",
  },
  Button: {
    marginLeft: 20,
    alignItems: "center",
  },
});

function SplashScreen({ navigation }) {
  return (
    <View style={styles.containerSplash}>
      <Splash></Splash>
      <View style={styles.Button}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.push("Splash")}
        >
          <Text style={styles.submitButtonText}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.submitButton2}
        onPress={() => navigation.push("Splash")}
      >
        <Text style={styles.submitButtonText2}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => navigation.push("Register")}
      />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Splash" onPress={() => navigation.push("Splash")} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
