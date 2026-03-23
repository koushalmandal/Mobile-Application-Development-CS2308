import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();

// ----------- HOME SCREEN -----------
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.homeContainer}>

        {/* Logo */}
        <View style={styles.logoRow}>
          <Icon name="diamond" size={22} color="white" />
          <Text style={styles.logoText}> argon</Text>
        </View>

        {/* Text */}
        <View>
          <Text style={styles.bigText}>Design</Text>
          <Text style={styles.bigText}>System</Text>

          <Text style={styles.smallText}>
            Fully coded React Native components
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate("CreateAccount")}
        >
          <Text style={{ color: "#333", fontWeight: "bold" }}>
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

// ----------- CREATE ACCOUNT -----------
const CreateAccountScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const getStrength = () => {
    if (password.length > 8) return "Strong";
    if (password.length > 4) return "Medium";
    return "Weak";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6a11cb" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "white", marginBottom: 10 }}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.header}>Create Account</Text>

        {/* Card */}
        <View style={styles.card}>

          {/* Social Buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Icon name="github" size={20} />
              <Text style={styles.socialText}> Github</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Icon name="google" size={20} />
              <Text style={styles.socialText}> Google</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.separator}>
            or sign up with credentials
          </Text>

          {/* Inputs with icons */}
          <View style={styles.inputRow}>
            <Icon name="user" size={16} />
            <TextInput placeholder="Name" style={styles.input} />
          </View>

          <View style={styles.inputRow}>
            <Icon name="envelope" size={16} />
            <TextInput placeholder="Email" style={styles.input} />
          </View>

          <View style={styles.inputRow}>
            <Icon name="lock" size={16} />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              onChangeText={setPassword}
            />
          </View>

          <Text style={styles.strength}>
            Strength: {getStrength()}
          </Text>

          {/* Checkbox */}
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setAgree(!agree)}
          >
            <View style={[styles.checkbox, agree && styles.checked]} />
            <Text>I agree with the privacy policy</Text>
          </TouchableOpacity>

          {/* Button */}
          <TouchableOpacity style={styles.createBtn}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// ----------- NAVIGATION -----------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ----------- STYLES -----------
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#6a11cb",
    justifyContent: "space-between",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  bigText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  smallText: {
    color: "white",
    marginTop: 10,
  },
  bottomButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  header: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    width: "48%",
    justifyContent: "center",
  },
  socialText: {
    marginLeft: 5,
  },

  separator: {
    textAlign: "center",
    marginVertical: 10,
    color: "gray",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },

  strength: {
    marginBottom: 10,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#6a11cb",
  },

  createBtn: {
    backgroundColor: "#11cdef",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});