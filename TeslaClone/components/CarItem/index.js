import React from "react";
import { View, Text } from "react-native";
import styles from ".style";

const CartItem = (props) => {
  return (
    <View style={styles.carContaier}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelY.jpeg")}
      />

      <View style={styles.titles}>
        <View>
          <Text style={styles.title}>Model S</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>Start at $650</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
