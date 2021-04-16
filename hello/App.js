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
  TouchableHighlight,
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
import AS from "./compenents/AboutScreen";
import SC from "./compenents/SplashScreen";

function Register({ navigation }) {
  return (
    <View style={styles.containerRegister}>
      <RegisterScreen></RegisterScreen>
      <View style={styles.Button}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Pres1")}
        >
          <Text style={styles.submitButtonText}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.submitButton2}
        onPress={() => navigation.navigate("Pres1")}
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
          onPress={() => navigation.navigate("Dash")}
        >
          <Text style={styles.submitButtonText}> S'inscrire </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.submitButton2}
        onPress={() => navigation.navigate("Pres1")}
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
            <View style={styles.Parentcontainer}>
              <View style={styles.container99}>
                <View style={styles.MenuBar1}>
                  <TouchableOpacity onPress={() => navigation.navigate("More")}>
                    <Image source={require("./assets/barMenu/1.png")}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("More")}>
                    <Image source={require("./assets/barMenu/2.png")}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Dash")}>
                    <View style={styles.HomeButton}>
                      <Image
                        style={styles.HomeButton}
                        source={require("./assets/barMenu/3.png")}
                      ></Image>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("More")}>
                    <Image source={require("./assets/barMenu/4.png")}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("More")}>
                    <Image source={require("./assets/barMenu/5.png")}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
        <View style={styles.BOX}></View>
        <View style={styles.Parentcontainer2}>
          <View style={styles.container99}>
            <View style={styles.MenuBar1}>
              <TouchableOpacity onPress={() => navigation.navigate("More")}>
                <Image source={require("./assets/barMenu/1.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("More")}>
                <Image source={require("./assets/barMenu/2.png")}></Image>
              </TouchableOpacity>

              <View style={styles.HomeButton}>
                <TouchableOpacity onPress={() => navigation.navigate("Dash")}>
                  <Image
                    style={styles.HomeButton}
                    source={require("./assets/barMenu/3.png")}
                  ></Image>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate("More")}>
                <Image source={require("./assets/barMenu/4.png")}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("More")}>
                <Image source={require("./assets/barMenu/5.png")}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
        onPress={() => navigation.navigate("Pres1")}
      >
        <Text style={styles.submitButtonTextLog}> Se connecter </Text>
      </TouchableOpacity>
    </View>
  );
}

function About({ navigation }) {
  return (
    <View styles={styles.ContainerMore}>
      <AS />
    </View>
  );
}
function Splash({ navigation }) {
  return (
    <View styles={styles.ContainerMore}>
      <SC />
      <TouchableOpacity
        style={styles.submitButtonSplash}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.submitButtonTextSplash}> Se connecter </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitButtonSplash2}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.submitButtonTextSplash2}> S'inscrire </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Log} />
        <Stack.Screen name="Pres1" component={Pres} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
  MenuBar1: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  HomeButton: {
    marginTop: -28,
  },
  Parentcontainer: {
    backgroundColor: "#364F59",
  },
  Parentcontainer2: {
    marginTop: -50,
    height: 150,
    backgroundColor: "#364F59",
  },
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

  submitButtonSplash: {
    backgroundColor: "#F9B233",
    marginTop: -500,
    marginLeft: 65,
    padding: 10,
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
  submitButtonTextSplash: {
    color: "white",
  },

  submitButtonSplash2: {
    borderColor: "#F9B233",
    borderWidth: 1,
    marginTop: 50,
    marginLeft: 67,
    padding: 10,
    height: 40,
    width: 250,
    borderRadius: 50,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 5,
  },
  submitButtonTextSplash2: {
    color: "white",
  },
  submitButtonText: {
    color: "white",
  },
  Button: {
    marginLeft: 20,
    alignItems: "center",
  },
  BOX: {
    width: 400,
    height: 100,
    backgroundColor: "#364F59",
  },
});
export default App;
