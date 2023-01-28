import { useSelector } from "react-redux";
import { Text, View, Image, StyleSheet } from "react-native";
import { selectCount } from "../features/counter/counterSlice";
import { EXERCISES } from "../assets/EXERCISES";

const ExerciseModalScreen = () => {
    const count = useSelector(selectCount);
    const exercise = EXERCISES.find((e) => e.rating === count);

    return (
        <View style={styles.view}>
            <Text>{exercise.name}</Text>
            <Image source={exercise.image} />
            <Text>{exercise.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginTop: 10,
    },
});

export default ExerciseModalScreen;
