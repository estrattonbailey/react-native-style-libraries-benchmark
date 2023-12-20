import { View, Pressable, Text } from "react-native";
import { styled } from "@fast-styles/react";
import { COUNT } from "../utils";

const Container = styled(View, {
  flexDirection: 'row',
  paddingHorizontal: 5,
});

const FastStylesButton = styled(Pressable, {
  backgroundColor: 'red',
  paddingHorizontal: 5,
});

const FastStyles = () => {
  return (
    <Container>
      {new Array(COUNT).fill(0).map((_, i) => (
        <FastStylesButton key={i}>
          <Text>{i}</Text>
        </FastStylesButton>
      ))}
    </Container>
  );
};

export default FastStyles;
