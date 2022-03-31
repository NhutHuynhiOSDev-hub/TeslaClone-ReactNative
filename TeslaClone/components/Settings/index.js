import React from "react";
import { View, Text } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const SettingsScreen = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            navigation.navigate("Details");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            navigation.navigate("MyModal");
          }}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
