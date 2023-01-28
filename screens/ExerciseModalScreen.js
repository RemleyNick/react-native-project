import { useSelector } from "react-redux";
import { Text, View, Image, StyleSheet } from "react-native";
import { selectCount } from "../features/counter/counterSlice";
import { EXERCISES } from "../assets/EXERCISES";

const ExerciseModalScreen = () => {
    const count = useSelector(selectCount);
    const exercise = EXERCISES.find((e) => e.rating === count);

    return (
        <View>
            <Text style={styles.title}>{exercise.name}</Text>
            <Image source={exercise.image} style={styles.image} />
            <Text style={styles.subtitle}>{exercise.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        margin: 10,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 3,
    },
    image: {
        width: 300,
        height: 300,
        justifyContent: "center",
        alignSelf: "center",
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
});

export default ExerciseModalScreen;
