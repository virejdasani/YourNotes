import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Note from "./components/Note";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your Notes</Text>

      {/* Notes Start */}
      <View style={styles.notesWrapper}>
        <Note text="Note 1" />
        <Note text="Note 2" />
        <Note text="Note 3" />
      </View>
      {/* Notes End */}

      {/* Add Note Start */}
      {/* This view does not get covered when keyboard pops up. The behaviour is taken from the React Native docs */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.addNoteWrapper}
      >
        {/* Make a note input box */}
        <TextInput
          style={styles.inputNote}
          placeholder={"Make a note"}
        ></TextInput>

        {/* Add note button */}
        <TouchableOpacity>
          <View style={styles.addButtonWrapper}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* Add Note End */}
    </View> // Container
  ); // App
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
  // The note adding view
  addNoteWrapper: {
    position: "absolute",
    bottom: 80,
    padding: 30,
    width: "100%",
    flexDirection: "row",
  },
  // The input text box to make a note
  inputNote: {
    width: "80%",
    height: 45,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  // The add button
  addButtonWrapper: {
    backgroundColor: "#fff",
    height: 45,
    width: 45,
    marginLeft: 50,
    padding: 10,
    borderRadius: 45,
    alignItems: "center",
  }
});
