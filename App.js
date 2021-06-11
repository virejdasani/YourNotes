import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Note from "./components/Note";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your Notes</Text>

      <View style={styles.notesWrapper}>
        {/* Notes go here */}
        <Note text="Note 1" />
        <Note text="Note 2" />
        <Note text="Note 3" />
      </View>
    </View>
  );
}

// All styles go here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAEF",
    paddingTop: 80,
    paddingHorizontal: 25,
  },
  // This is the title 'Your Notes'
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  // This is all the notes
  notesWrapper: {
    marginTop: 20,
  },
});
