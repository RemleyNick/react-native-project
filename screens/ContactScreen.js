import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation="fadeInDown"
                duration={2000}
                delay={1000}
            >
                <Card wrapperStyle={{ margin: 20 }}>
                    <Card.Title>Contact Information</Card.Title>
                    <Card.Divider />
                    <Text>Nick Remley</Text>
                    <Text>Butte, MT 59701</Text>
                    <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                    <Text>Phone: 1-847-727-4628</Text>
                    <Text>Email: remleynick44@gmail.com</Text>
                </Card>
            </Animatable.View>
        </ScrollView>
    );
};

export default ContactScreen;
