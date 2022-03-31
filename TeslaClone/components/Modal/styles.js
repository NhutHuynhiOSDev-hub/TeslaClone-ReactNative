import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },

  titles: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
