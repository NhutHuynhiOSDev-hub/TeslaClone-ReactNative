import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarList from "./components/CarList";
import Header from "./components/Header";
import Details from "./components/Details";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MainStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        options={{
          title: "",

          headerRight: () => (
            <Button
              type="clear"
              icon={{
                name: "menu",
                size: 24,
                color: "black",
              }}
            />
          ),
          headerTransparent: true,
          headerShadowVisible: false,
        }}
        name="MainStackScreen"
        component={MainStackScreen}
      />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackScreen />
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
