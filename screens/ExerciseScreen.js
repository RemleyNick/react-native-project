import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Counter } from "../features/counter/Counter";

const ExerciseScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.title}>Rate Your Pain Level Today</Text>
            <Counter />
            <Text style={styles.italic}>0 = No Pain, 10 = Extreme Pain.</Text>
            <Text style={styles.subtitle}>
                Exercise challenge will be based on your pain rating. The higher
                your pain today, the easier the exercise.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("ExerciseModal")}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        margin: 10,
        marginBottom: 25,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 3,
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    italic: {
        fontStyle: "italic",
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    button: {
        width: 200,
        backgroundColor: "blue",
        padding: 15,
        marginTop: 10,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 40,
        marginBottom: 3,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f4f4f4",
        justifyContent: "center",
        alignSelf: "center",
    },
});

export default ExerciseScreen;
