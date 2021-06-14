import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Note from "./components/Note";

export default function App() {
  // This is the note while it is being typed in
  const [note, setNote] = useState();
  // This is the array that stores all the notes
  const [noteItems, setNoteItems] = useState([]);

  // This is executed when the add note button is pressed
  const handleAddNote = () => {
    // This makes the keyboard go away when note has been added
    // Keyboard.dismiss();

    // console.log(note);

    // This takes everything in the noteItems and puts it into an [array] and appends the value of the note to that array
    // It works like: noteItems(array) += note(new note)
    // To add the new note to the bottom of the list, use this `setNoteItems([note, ...noteItems]);` Else, use this:
    setNoteItems([note, ...noteItems]);

    // Clear the input field
    setNote(null);
  };

  const handleDeleteNote = (index) => {
    // Make a copy array of noteItems
    let notesCopy = [...noteItems];
    // Remove the element in the copy array at the index of 'index'
    notesCopy.splice(index, 1);
    // Set the modified array to the original array
    setNoteItems(notesCopy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Your Notes</Text>
      <ScrollView style={styles.scrollView}>
        {/* Notes Start */}
        <View style={styles.notesWrapper}>
          {
            // This maps over all the noteItems and adds the Note from Note.js
            noteItems.map((element, index) => {
              return (
                <Note
                  key={index}
                  text={element}
                  onDelete={() => handleDeleteNote(index)}
                />
              );
            })
          }
        </View>
        {/* Notes End */}
      </ScrollView>
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
          // We set the value to the note because in the handleAddNote() once the note is added, we want to clear the input field
          value={note}
          // When something is entered, set that text to the note
          onChangeText={(text) => setNote(text)}
        />

        {/* Add note button */}
        <TouchableOpacity onPress={() => handleAddNote()}>
          <View style={styles.addButtonWrapper}>
            <Text style={styles.addButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* Add Note End */}
    </SafeAreaView> // Container
  ); // App
}

// All styles go here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAEF",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
  },
  scrollView: {  },
  // This is the title 'Your Notes'
  titleText: {
    paddingTop: 60,
    fontSize: 35,
    fontWeight: "bold",
  },
  // This is all the notes
  notesWrapper: {
    marginTop: 10,
    marginBottom: 200,
  },
  // The note adding view
  addNoteWrapper: {
    // position: "absolute",
    top: 20,
    paddingLeft: 10,
    paddingBottom: 50,
    width: "80%",
    flexDirection: "row",
  },
  // The input text box to make a note
  inputNote: {
    width: "90%",
    height: 45,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  // The add button
  addButtonWrapper: {
    backgroundColor: "#fff",
    height: 55,
    width: 55,
    marginLeft: 35,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addButtonText: {
    fontSize: 20,
  },
});
