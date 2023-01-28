import {
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/image-video/yoga.jpg")}
            style={styles.imgBackground}
            resizeMode="cover"
        >
            <Text style={styles.title}>Better Back Health</Text>
            <Text style={styles.subtitle}>Pain Relief Awaits!</Text>
            <Text style={styles.subtitle}>What are you waiting for?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Exercise")}
                // title="Get Started"
                style={styles.startButton}
            >
                <Text style={styles.btnStartText}>Get Started!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("About")}
                // title="Learn More"
                style={styles.aboutButton}
            >
                <Text style={styles.btnAboutText}>Learn More</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imgBackground: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    title: {
        color: "#f4f4f4",
        margin: 50,
        marginBottom: 25,
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 3,
    },
    subtitle: {
        color: "#f4f4f4",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        margin: 5,
    },
    startButton: {
        width: 200,
        backgroundColor: "#f4f4f4",
        padding: 15,
        marginTop: 50,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        margin: 3,
    },
    aboutButton: {
        width: 200,
        backgroundColor: "transparent",
        padding: 15,
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        borderColor: "#f4f4f4",
        borderWidth: 2,
        margin: 3,
    },
    btnStartText: {
        color: "#A9A9A9",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    btnAboutText: {
        color: "#f4f4f4",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default HomeScreen;
