import { StyleSheet, View, Text, Pressable } from "react-native";
import { COUNT } from "../utils";

const Native = () => {
  return (
    <View style={styles.container}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Pressable key={i} style={styles.button}>
          <Text>{i}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  button: {
    paddingHorizontal: 5,
    backgroundColor: "red",
  }
});

export default Native;
