import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Note = (props) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteText}>{props.text}</Text>
      <View style={styles.controls}>
        {/* props.onDelete and props.onEdit is the delete and edit button press handler from App.js */}
        <TouchableOpacity onPress={props.onEdit}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
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
    maxWidth: "66%",
    fontSize: 18,
  },
  controls: {
    flexDirection: "row",
  },
  editText: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: "#0000ff",
    fontSize: 16,
  },
  deleteText: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: "#ff0000",
    fontSize: 16,
  },
});

export default Note;
