import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                aria-label="Increment value"
                onPress={() => dispatch(increment())}
            >
                <Text style={styles.subtitle}> + </Text>
            </TouchableOpacity>
            <Text style={styles.value}>{count}</Text>
            <TouchableOpacity
                style={styles.button}
                aria-label="Decrement value"
                onPress={() => dispatch(decrement())}
            >
                <Text style={styles.subtitle}> - </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    value: {
        fontSize: 78,
        padding: 10,
        marginTop: 2,
        justifyContent: "center",
        alignSelf: "center",
    },
    button: {
        width: 200,
        fontSize: 32,
        padding: 10,
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: "blue",
        justifyContent: "center",
        alignSelf: "center",
    },
    subtitle: {
        color: "#f4f4f4",
        fontSize: 40,
        fontWeight: "bold",
        margin: 5,
        justifyContent: "center",
        alignSelf: "center",
    },
});
