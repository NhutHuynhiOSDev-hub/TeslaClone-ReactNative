import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CartItem = (props) => {
  return (
    <View style={styles.carContaier}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelY.jpeg")}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Start at $650</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order was pressed");
        }}
      />

      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
};

export default CartItem;
