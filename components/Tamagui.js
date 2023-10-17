import React from "react";
import { View, Text, Pressable } from "react-native";
import { Stack, TamaguiProvider, styled } from "tamagui";

import config from "../tamagui.config";
import { COUNT } from "../utils";

const Button = styled(Pressable, {
  backgroundColor: 'red',
  paddingHorizontal: 2,
  gtMd: {
    backgroundColor: 'blue',
    paddingHorizontal: 5,
  }
})

const Tamagui = () => {
  return (
    <TamaguiProvider config={config}>
      <Stack flexDirection='row' paddingHorizontal={2} gtMd={{ paddingHorizontal: 5 }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Button key={i}>
            <Text>{i}</Text>
          </Button>
        ))}
      </Stack>
    </TamaguiProvider>
  );
};

export default Tamagui;
