import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#358A92",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Blub",
          headerTintColor: "#358A92",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          headerTitle: "Blub",
          headerTintColor: "#358A92",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="people-roof" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerTitle: "Blub",
          headerTintColor: "#358A92",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerTitle: "Blub",
          headerTintColor: "#358A92",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="hipchat" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerTitle: "Blub",
          headerTintColor: "#358A92",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-badge"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
