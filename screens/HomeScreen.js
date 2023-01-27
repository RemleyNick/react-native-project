import { Text, ImageBackground, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/image-video/yoga.jpg")}
            style={styles.imgBackground}
            resizeMode="cover"
        >
            <Text>Home Screen</Text>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imgBackground: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
});

export default HomeScreen;
