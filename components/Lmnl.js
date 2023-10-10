import React from 'react'
import { View } from "react-native";
import { createTheme, createSystem } from "@lmnl/core";
import { COUNT } from "../utils";

const light = createTheme({
  tokens: {
    space: {
      xs: 4,
    },
    color: {
      red: "#FF0000",
    },
  },
})

const { ThemeProvider, styled } = createSystem({ light });

const Box = styled(View, {})

const Lmnl = () => {
  return (
    <ThemeProvider theme='light'>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Box key={i} padding='xs' borderColor="red" borderWidth={2} />
        ))}
      </View>
    </ThemeProvider>
  );
};

export default Lmnl;
