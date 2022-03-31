import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarList from "./components/CarList";
import Header from "./components/Header";
import Details from "./components/Details";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./components/Settings";

const BottomTab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

function HomeScreen(props) {
  console.log("HomeScreen", props);
  return (
    <View style={styles.container}>
      <CarList navigation={props.navigation} />
      <StatusBar style="aupropsto" />
    </View>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
        }}
      />
      <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="MainStackScreen"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
}

function BottomTabScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={RootStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
