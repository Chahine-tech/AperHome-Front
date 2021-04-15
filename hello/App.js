import * as React from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./compenents/RegisterScreen";
import Login from "./compenents/LoginScreen";
import Presentation from "./compenents/Presenstation";
import Dashboard from "./compenents/DashboardScreen";
import MB from "./helpers/MenuBar";
import MB2 from "./helpers/MenuBar2";
import MM from "./compenents/MoreScreen";
import CWG from "./helpers/CWG";

function Register({ navigation }) {
  return (
    <View style={styles.containerRegister}>
      <RegisterScreen></RegisterScreen>
      <View style={styles.Button}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.push("Pres1")}
        >
          <Text style={styles.submitButtonText}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.submitButton2}
        onPress={() => navigation.push("Pres1")}
      >
        <Text style={styles.submitButtonText2}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
}

function Pres({ navigation }) {
  return (
    <View style={styles.container}>
      <Presentation></Presentation>
      <View style={styles.Button}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.push("Dash")}
        >
          <Text style={styles.submitButtonText}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.submitButton2}
        onPress={() => navigation.push("Pres1")}
      >
        <Text style={styles.submitButtonText2}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
}

function Dash({ navigation }) {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.containerDash}>
            <Dashboard></Dashboard>
            <MB></MB>
          </View>
          <Button
            title="Go to Register"
            onPress={() => navigation.push("More")}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function More({ navigation }) {
  return (
    <View styles={styles.ContainerMore}>
      <View>
        <MM />
        <Button title="Go to Splash" onPress={() => navigation.push("Login")} />
        <MB2 />
      </View>
    </View>
  );
}
function Log({ navigation }) {
  return (
    <View styles={styles.ContainerMore}>
      <Login />
      <CWG />
      <TouchableOpacity
        style={styles.submitButtonLog}
        onPress={() => navigation.push("Pres1")}
      >
        <Text style={styles.submitButtonTextLog}> Se connecter </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Log} />
        <Stack.Screen name="Pres1" component={Pres} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#364F59",
  },
  containerDash: {
    backgroundColor: "#364F59",
  },
  containerRegister: {
    backgroundColor: "#364F59",
  },
  ContainerMore: {
    backgroundColor: "#364F59",
  },
  Logo: {
    aspectRatio: 1.5,
    resizeMode: "contain",
    marginTop: -600,
  },
  submitButton2: {
    marginTop: 300,
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
  submitButtonLog: {
    marginTop: -620,
    marginLeft: 70,
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
  submitButtonTextLog: {
    color: "white",
  },
  submitButtonText: {
    color: "white",
  },
  Button: {
    marginLeft: 20,
    alignItems: "center",
  },
});
export default App;
