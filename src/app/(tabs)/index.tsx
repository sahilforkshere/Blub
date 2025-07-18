import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import posts from "../../../assets/data/posts.json";
import { formatDistanceToNowStrict } from "date-fns";
import { ImageSourcePropType } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import PostListItem from "../../components/PostListItem";
import { FlatList } from "react-native";


const HomeScreen = () => {
  return (
    <View>
    <FlatList data={posts} renderItem={({item})=><PostListItem post={item}/>}/>

    </View>
  );
};

export default HomeScreen;
