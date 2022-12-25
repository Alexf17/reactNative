import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

import { PostsScreen } from "../MainScreens/PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../MainScreens/CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../MainScreens/ProfileScreen/ProfileScreen";

const MainTab = createBottomTabNavigator();

export function Home() {
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        // tabBarShowLabel: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ffffff",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121CC",
        tabBarStyle: {
          paddingTop: 10,
          paddingHorizontal: 50,
          paddingBottom: 50,
        },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "All publications",
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="grid" size={size} color={color} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10, marginBottom: 10 }}
              activeOpacity={0.7}
              onPress={() => navigation.popToTop()}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarItemStyle: {
            marginLeft: 15,
            marginRight: 15,
            width: 70,
            height: 40,
            borderRadius: 50,
          },
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Create post",
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="plus" size={size} color={color} />
            </TouchableOpacity>
          ),
          tabBarItemStyle: {
            marginRight: 15,
            width: 70,
            height: 40,
            borderRadius: 50,
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity>
              <Feather name="user" size={size} color={color} />
            </TouchableOpacity>
          ),

          tabBarItemStyle: {
            marginRight: 15,
            width: 70,
            height: 40,
            borderRadius: 50,
          },
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
