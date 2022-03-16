import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  subTitleCTA: {
    textDecorationLine: "underline",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
