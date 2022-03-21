import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const Details = (props) => {
  const { name, image } = props.car;

  return (
    <View style={styles.carContaier}>
      <ImageBackground style={styles.image} source={image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </View>
  );
};

export default Details;
