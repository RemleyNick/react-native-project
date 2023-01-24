import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import { Icon, ListItem } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const Mission = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation="fadeInDownBig"
                duration={2000}
                delay={500}
            >
                <Card>
                    <Card.Title>The Mission</Card.Title>
                    <Card.Divider />
                    <Text
                        style={{
                            margin: 10,
                        }}
                    >
                        Exercise can be time consuming and gym memberships can
                        be expensive. If those barriers are not big enough, how
                        about the hurdle of knowing which exercises to perform
                        and how hard to push it? Our goal is to minimize those
                        barriers and have you taking steps forward towards a
                        pain-free you! Play an active role in reducing your
                        short and long-term pain with these quick exercises,
                        customized based on your daily pain rating.
                    </Text>
                </Card>
            </Animatable.View>
        </ScrollView>
    );
};

const AboutScreen = () => {
    return (
        <ScrollView>
            <Animatable.View animation="fadeInUp" duration={2000} delay={500}>
                <Mission />
                <Card>
                    <Card.Title>Back Pain Facts</Card.Title>
                    <Card.Divider />
                    <ListItem>
                        <Icon
                            name="handshake-o"
                            type="font-awesome"
                            size={24}
                            iconStyle={{ width: 24 }}
                        />
                        <ListItem.Content>
                            <ListItem.Title>You're not alone!</ListItem.Title>
                            <ListItem.Subtitle>
                                8 out of 10 Americans will experience back pain
                                in their lives.
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem>
                        <Icon
                            name="clock-o"
                            type="font-awesome"
                            size={24}
                            iconStyle={{ width: 24 }}
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                Millions hurting today!
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                3 out of 10 Americans are suffering with back
                                pain right now.
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem>
                        <Icon
                            name="credit-card"
                            type="font-awesome"
                            size={24}
                            iconStyle={{ width: 24 }}
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                Treating back pain is often expensive!
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                It is a $12 billion/yr industry and the 6th most
                                costly condition in U.S.
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </Card>
            </Animatable.View>
        </ScrollView>
    );
};

export default AboutScreen;
