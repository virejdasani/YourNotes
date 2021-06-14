import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Note = (props) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteText}>{props.text}</Text>
      {/* props.onDelete is the delete button press handler from App.js */}
      <TouchableOpacity onPress={props.onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  noteText: {
    maxWidth: "70%",
    fontSize: 18,
  },
  deleteText: {
    padding: 4,
    color: "red",
    fontSize: 16,
  },
});

export default Note;
