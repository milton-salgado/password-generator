import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#392DE9",
                tabBarInactiveTintColor: "#181818A6",
                tabBarStyle: {
                    backgroundColor: "#f8f8f8",
                    borderTopWidth: 0,
                    elevation: 5,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Início",
                    tabBarIcon: ({ focused, size, color }) =>
                        ({ focused } ? (
                            <Ionicons size={size} name="home" color={color} />
                        ) : (
                            <Ionicons
                                size={size}
                                name="home-outline"
                                color={color}
                            />
                        )),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="passwords"
                options={{
                    title: "Minhas senhas",
                    tabBarIcon: ({ focused, size, color }) =>
                        ({ focused } ? (
                            <Ionicons
                                size={size}
                                name="lock-closed"
                                color={color}
                            />
                        ) : (
                            <Ionicons
                                size={size}
                                name="lock-closed-outline"
                                color={color}
                            />
                        )),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
