import React from 'react'
import { View, Text, Pressable } from "react-native";
import { createTheme, createSystem } from "@lmnl/core";
import { COUNT } from "../utils";

const light = createTheme({
  tokens: {
    space: {
      xs: 4,
      md: 8,
    },
    color: {
      red: "#FF0000",
      blue: "#0000FF",
    },
  },
  breakpoints: {
    gtPhone: 650
  }
})

const { ThemeProvider, styled, useStyle } = createSystem({ light });

const Box = styled(View, {})

function Button(props) {
  const style = useStyle({
    backgroundColor: 'red',
    paddingHorizontal: 'xs',
    gtPhone: {
      backgroundColor: 'blue',
      paddingHorizontal: 'md',
    }
  })

  return (
    <Pressable style={style}>
      {props.children}
    </Pressable>
  )
}

// const Button = styled(Pressable, {
//   backgroundColor: 'red',
//   paddingHorizontal: 'xs',
//   gtPhone: {
//     backgroundColor: 'blue',
//     paddingHorizontal: 'md',
//   }
// })

const Lmnl = () => {
  return (
    <ThemeProvider theme='light'>
      <Box flexDirection='row' paddingHorizontal='xs' gtPhone={{ paddingHorizontal: 'md' }} overflow='hidden'>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Button key={i}><Text>{i}</Text></Button>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default Lmnl;
