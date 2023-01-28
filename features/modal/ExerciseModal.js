import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, TouchableOpacity, Text, View, Image } from "react-native";
import { selectCount } from "../counter/counterSlice";
import { EXERCISES } from "../../assets/EXERCISES";

const ExerciseModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const count = useSelector(selectCount);
    const exercise = EXERCISES.find((e) => e.rating === count);

    return (
        <View>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <Modal isOpen={modalOpen}>
                <Text toggle={() => setModalOpen(false)}>{exercise.name}</Text>
                <Text>
                    <Image src={exercise.image} />
                    {exercise.description}
                </Text>
            </Modal>
        </View>
    );
};

export default ExerciseModal;
