import { Platform, View, StyleSheet, Text, Image } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import ExerciseScreen from "./ExerciseScreen";
import ContactScreen from "./ContactScreen";
import AboutScreen from "./AboutScreen";
import ExerciseModalScreen from "./ExerciseModalScreen";
import { Icon } from "react-native-elements";
import logo from "../assets/image-video/bbhLogo2.png";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#A9A9A9" },
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: "Home",
                    headerLeft: () => (
                        <Icon
                            name="home"
                            type="font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name="info-circle"
                            type="font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="Contact"
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: "Contact Us",
                    headerLeft: () => (
                        <Icon
                            name="address-card"
                            type="font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

const ExerciseNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="Exercise"
                component={ExerciseScreen}
                options={({ navigation }) => ({
                    title: "Exercise",
                    headerLeft: () => (
                        <Icon
                            name="user-circle-o"
                            type="font-awesome"
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="ExerciseModal"
                component={ExerciseModalScreen}
                options={{ title: "Exercises" }}
            />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Better Back Health</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: "bold" }} />
    </DrawerContentScrollView>
);

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
            }}
        >
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: "#a8b8d0" }}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        title: "Home",
                        drawerIcon: ({ color }) => (
                            <Icon
                                name="home"
                                type="font-awesome"
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="About"
                    component={AboutNavigator}
                    options={{
                        title: "About",
                        drawerIcon: ({ color }) => (
                            <Icon
                                name="info-circle"
                                type="font-awesome"
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Exercise"
                    component={ExerciseNavigator}
                    options={{
                        title: "Exercise",
                        drawerIcon: ({ color }) => (
                            <Icon
                                name="user-circle-o"
                                type="font-awesome"
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Contact"
                    component={ContactNavigator}
                    options={{
                        title: "Contact Us",
                        drawerIcon: ({ color }) => (
                            <Icon
                                name="address-card"
                                type="font-awesome"
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: "#A9A9A9",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
    },
    drawerHeaderText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60,
        borderRadius: 20,
    },
    stackIcon: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 24,
    },
});

export default Main;
