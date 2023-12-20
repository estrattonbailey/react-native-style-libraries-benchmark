import { View, Pressable, Text } from "react-native";
import { COUNT } from "../utils";

const NativeWind = () => {
  return (
    <View className='flex flex-row'>
      {new Array(COUNT).fill(0).map((_, i) => (
        <Pressable key={i} className='bg-red-400 px-1 md:px-2'>
          <Text>{i}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default NativeWind;
