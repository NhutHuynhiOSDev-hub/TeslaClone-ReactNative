import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContaier}>
        <View style={styles.titles}>
          <View>
            <Text style={styles.title}>Model SSSSsS</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Start at $650</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  carContaier: {
    width: "100%",
    height: "100%",
  },

  titles: {
    width: "100%",
    marginTop: "30%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "500",
  },

  subTitle: {
    fontSize: 16,

    color: "#5c5e62",
  },
});
