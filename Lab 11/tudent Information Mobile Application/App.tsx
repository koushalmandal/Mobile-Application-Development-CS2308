import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// ----------- Home Screen -----------
const HomeScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    navigation.navigate("Student", { studentName: name });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Enter Student Name</Text>

      <TextInput
        placeholder="Enter name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// ----------- Student Screen -----------
const StudentScreen = ({ route, navigation }: any) => {
  const { studentName } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Student Information</Text>

      <Text style={styles.text}>Name: {studentName}</Text>
      <Text style={styles.text}>Welcome, {studentName}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// ----------- Navigation -----------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ----------- Styles -----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#11cdef",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
});