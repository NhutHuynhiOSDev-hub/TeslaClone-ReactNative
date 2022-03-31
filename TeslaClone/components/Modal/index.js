import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const ModalScreen = (props) => {
  console.log("Modal screen", props);
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title}>This is Modal screen!</Text>
      </View>
    </View>
  );
};

export default ModalScreen;
