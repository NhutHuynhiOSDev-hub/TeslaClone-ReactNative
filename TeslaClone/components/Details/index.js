import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";


const Details = ({routes, navigation}) => {
  return (
    <View style={styles.carContaier}>
      <ImageBackground
        style={styles.image}
        source="../../assets/images/Model3.jpeg"
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model 3</Text>
      </View>
    </View>
  );
};

export default Details;
