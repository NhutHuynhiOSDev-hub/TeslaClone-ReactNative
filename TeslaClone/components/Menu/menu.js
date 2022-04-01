import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const MenuScreen = (props) => {

    const image = require("../../assets/images/ModelS.jpeg");

  return (
    <View style={styles.carContaier}>
      <ImageBackground style={styles.image} source={image} />
    </View>
  );
};

export default MenuScreen;
