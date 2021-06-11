import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Note = (props) => {
  return (
    <View style={styles.noteContainer}>
      <Text>{props.text}</Text>
    </View>
  );
};

// All styles go here
const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    width: "100%",
  },
});

export default Note;
