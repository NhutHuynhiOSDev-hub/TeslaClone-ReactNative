import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContaier: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
