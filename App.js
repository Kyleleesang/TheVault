import React, { Component, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
let user = "";
let pass = "";
function HomeScreen({ navigation, route }) {
  const [text, setText] = useState("");
  const [text1, setText2] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to your password manager</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="username"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="password"
        onChangeText={(text1) => setText2(text)}
        defaultValue={text1}
      />
      <Button
        onPress={() =>
          navigation.navigate("Details", {
            param1: text,
            param2: text1,
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { param1, param2 } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{param1}</Text>
      <Text>{param2}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  console.log("app executed");
  const handlePress = () => console.log("text pressed");
  const handleimagePress = () => console.log("Image pressed");
  const handlebuttonPress = () => console.log("Image pressed");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
