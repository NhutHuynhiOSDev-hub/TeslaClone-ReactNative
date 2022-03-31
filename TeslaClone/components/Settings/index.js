import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title}>This is settings screen!</Text>
      </View>
    </View>
  );
};

export default Settings;
