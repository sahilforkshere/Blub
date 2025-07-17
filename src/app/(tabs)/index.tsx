import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import posts from "../../../assets/data/posts.json";
import { formatDistanceToNowStrict } from "date-fns";

const HomeScreen = () => {
  const post = posts[0];
  return (
    <View>
      <View style={styles.conatiner}>
        <Image
          source={{ uri: post.group.image }}
          style={{ width: 20, height: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: "bold" }}> {post.group.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post.created_at))} ago
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.button}>Join</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
  },

  buttonContainer: {
    marginLeft: "auto",
  },
  button: {
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
    marginRight: 5,
  },
});
