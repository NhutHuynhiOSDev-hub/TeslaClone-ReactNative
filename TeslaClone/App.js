import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarList from "./components/CarList";
import Details from "./components/Details";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalScreen from "./components/Modal";
import SettingsScreen from "./components/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuScreen from "./components/Menu/menu";

const MainDrawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

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
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
}

function ModalStackScreen() {
  return (
    <ModalStack.Navigator screenOptions={{ presentation: "modal" }}>
      <ModalStack.Screen
        options={{
          headerShown: false,
        }}
        name="MainStackScreen"
        component={MainStackScreen}
      />
      <ModalStack.Screen name="MyModal" component={ModalScreen} />
    </ModalStack.Navigator>
  );
}

function BottomTabScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "star" : "star-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <BottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={ModalStackScreen}
      />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
}

function DrawerScreen() {
  return (
    <MainDrawer.Navigator initialRouteName="Tabbar">
      <MainDrawer.Screen name="Menu" component={MenuScreen} />
      <MainDrawer.Screen name="Tabbar" component={BottomTabScreen} />
    </MainDrawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerScreen />
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
