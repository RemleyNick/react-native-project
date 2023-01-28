import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <View>
            <TouchableOpacity
                className={styles.button}
                aria-label="Decrement value"
                onPress={() => dispatch(decrement())}
            >
                <Text> - </Text>
            </TouchableOpacity>
            <Text className={styles.value}>{count}</Text>
            <TouchableOpacity
                className={styles.button}
                aria-label="Increment value"
                onPress={() => dispatch(increment())}
            >
                <Text> + </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    value: {
        fontSize: 78,
        padding: 10,
        marginTop: 2,
    },
    button: {
        fontSize: 32,
        padding: 10,
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: "blue",
    },
});
