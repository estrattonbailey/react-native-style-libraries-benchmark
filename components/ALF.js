import React from 'react'
import { View, Text, Pressable } from "react-native";
import { createSystem } from "./alf/system";
import { createTheme } from "./alf/theme";
import { COUNT } from "../utils";

const BLUE_HUE = 210
const GRAYSCALE_SATURATION = 12

export const palette = {
  white: '#FFFFFF',

  /**
   * Mathematical scale of grays, from lightest to darkest, all based on the
   * primary blue color
   */
  gray1: `hsl(${BLUE_HUE}, ${GRAYSCALE_SATURATION}%, 95%)`,
  gray2: `hsl(${BLUE_HUE}, ${GRAYSCALE_SATURATION}%, 85%)`,
  gray3: `hsl(${BLUE_HUE}, ${GRAYSCALE_SATURATION}%, 75%)`,
  gray4: `hsl(${BLUE_HUE}, ${GRAYSCALE_SATURATION}%, 30%)`,
  gray5: `hsl(${BLUE_HUE} ${GRAYSCALE_SATURATION}%, 20%)`,
  gray6: `hsl(${BLUE_HUE}, ${GRAYSCALE_SATURATION}%, 10%)`,
  black: `hsl(${BLUE_HUE}, ${GRAYSCALE_SATURATION}%, 5%)`,

  blue: `hsl(${BLUE_HUE}, 100%, 53%)`,
  green: '#54D469',
  red: '#FB4566',
}

export const light = createTheme({
  tokens: {
    space: {
      xxs: 2,
      xs: 4,
      s: 8,
      m: 12,
      l: 18,
      xl: 24,
      xxl: 32,
    },
    color: {
      primary: palette.blue,
      positive: palette.green,
      negative: palette.red,
      l0: palette.white,
      l1: palette.gray1,
      l2: palette.gray2,
      l3: palette.gray3,
      l4: palette.gray4,
      l5: palette.gray5,
      l6: palette.gray6,
      l7: palette.black,
    },
    fontSize: {
      xxs: 10,
      xs: 12,
      s: 14,
      m: 16,
      l: 18,
      xl: 22,
      xxl: 26,
    },
    lineHeight: {
      xxs: 10,
      xs: 12,
      s: 14,
      m: 16,
      l: 18,
      xl: 22,
      xxl: 26,
    },
    borderRadius: {
      s: 8,
      m: 12,
      xl: 36,
      round: 999,
    },
    fontWeight: {
      normal: '400',
      semi: '600',
      bold: '900',
    },
  },
  properties: {
    /** Alias for `width` */
    w: ['width'],
    /** Alias for `height` */
    h: ['height'],
    /** Alias for `color` */
    c: ['color'],
    /** Alias for `backgroundColor` */
    bg: ['backgroundColor'],
    /** Alias for all directional margin properties */
    ma: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    /** Alias for `marginTop` */
    mt: ['marginTop'],
    /** Alias for `marginBottom` */
    mb: ['marginBottom'],
    /** Alias for `marginLeft` */
    ml: ['marginLeft'],
    /** Alias for `marginRight` */
    mr: ['marginRight'],
    /** Alias for `marginVertical` */
    my: ['marginTop', 'marginBottom'],
    /** Alias for `marginHorizontal` */
    mx: ['marginLeft', 'marginRight'],
    /** Alias for all directional padding properties */
    pa: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    /** Alias for `paddingTop` */
    pt: ['paddingTop'],
    /** Alias for `paddingBottom` */
    pb: ['paddingBottom'],
    /** Alias for `paddingLeft` */
    pl: ['paddingLeft'],
    /** Alias for `paddingRight` */
    pr: ['paddingRight'],
    /** Alias for `paddingVertical` */
    py: ['paddingTop', 'paddingBottom'],
    /** Alias for `paddingHorizontal` */
    px: ['paddingLeft', 'paddingRight'],
    /** Alias for `zIndex` */
    z: ['zIndex'],
    /** Alias for `borderRadius` */
    radius: ['borderRadius'],
  },
  macros: {
    /** Shorthand for `flexDirection: 'row'` */
    row: (_) => ({flexDirection: 'row', flex: 1}),
    /**
     * Shorthand for `flex: 1`. Optionally pass an integer to specify the
     * col-span.
     *
     * Semantically this is helpful as a direct child of `<Box row>`
     *
     * @example
     * <Box row>
     *   <Box column>
     *     <Text>Hello</Text>
     *   </Box>
     *   <Box column={2}>
     *     <Text>Hello</Text>
     *   </Box>
     * </Box>
     */
    column: (span) => ({
      flex: typeof span === 'number' ? span : 1,
    }),
    /** Shorthand for `alignItems: 'center'` */
    aic: (_) => ({alignItems: 'center'}),
    /** Shorthand for `justifyContent: 'center'` */
    jcc: (_) => ({justifyContent: 'center'}),
    /** Shorthand for `justifyContent: 'space-between'` */
    jcb: (_) => ({justifyContent: 'space-between'}),
    /** Shorthand for `position: 'absolute'` */
    abs: (_) => ({position: 'absolute'}),
    /** Shorthand for `StyleSheet.absoluteFillObject` */
    cover: (_) => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
    /** Shorthand for `textTransform: 'uppercase'` */
    caps: (_) => ({textTransform: 'uppercase'}),
    /**
     * Shorthand for applying `fontSize` and `fontHeight`, according to our type scale.
     */
    fontSize(value, tokens) {
      return {
        fontSize: tokens.fontSize[value],
        lineHeight: tokens.lineHeight[value],
      }
    },
  },
  breakpoints: {
    /** Greater than 800 */
    gtMobile: 800,
    /** Greater than 1300 */
    gtTablet: 1300,
  },
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

const ALF = () => {
  return (
    <ThemeProvider theme='light'>
      <Box flexDirection='row' px='xs' gtPhone={{ px: 'md' }} overflow='hidden'>
        {new Array(COUNT).fill(0).map((_, i) => (
          <Button key={i}><Text>{i}</Text></Button>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default ALF;
