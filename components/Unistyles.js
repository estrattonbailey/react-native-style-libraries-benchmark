import React from 'react'
import { View, Text, Pressable } from "react-native";
import { UnistylesTheme, createUnistyles } from 'react-native-unistyles';
import theme from "../themes/unistyles-theme";

const breakpoints = {
    xs: 0,
    sm: 200,
    md: 500
};

const {
    createStyles,
    useStyles
} = createUnistyles(breakpoints);

const Unistyles = () => {
    return (
        <UnistylesTheme theme={theme}>
            <Demo />
        </UnistylesTheme>
    )
};

const Button = (props) => {
    const { styles } = useStyles(stylesheet)

    return (
        <Pressable style={styles.button}>
            <Text>{props.children}</Text>
        </Pressable>
    )
}

const Demo = () => {
    const { styles } = useStyles(stylesheet)

    return (
        <View style={styles.container}>
            {new Array(1000).fill(0).map((_, i) => (
                <Button key={i}>{i}</Button>
            ))}
        </View>
    )
};

const stylesheet = createStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: {
            xs: theme.spacing.xs,
            md: theme.spacing.md,
        }
    },
    button: {
        backgroundColor: {
            xs: theme.colors.red,
            md: theme.colors.blue,
        },
        paddingHorizontal: {
            xs: theme.spacing.xs,
            md: theme.spacing.md,
        }
    }
}));

export default Unistyles;
