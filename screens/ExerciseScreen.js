import { Text, View, TouchableOpacity } from "react-native";
import { Counter } from "../features/counter/Counter";

const ExerciseScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Rate Your Pain Level Today</Text>
            <Counter />
            <Text>
                Exercise challenge will be based on your pain rating. The higher
                your pain today, the easier the exercise.
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("ExerciseModal")}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ExerciseScreen;
