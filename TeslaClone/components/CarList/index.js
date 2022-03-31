import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CartItem from "../CarItem";

const CarList = (props) => {
  console.log("CarList", props);
  const renderItem = ({ item }) => (
    <CartItem navigation={props.navigation} car={item} />
  );

  return (
    <View style={styles.contaier}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // pagingEnabled={true}
      />
    </View>
  );
};

export default CarList;
