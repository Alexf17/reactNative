import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start on y app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableWithoutFeedback,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   Button,
// } from "react-native";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

// export default function App() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");

//   const nameHandler = (text) => setName(text);
//   const passwordHandler = (text) => setPassword(text);

//   const onLogin = () => {
//     Alert.alert("Credentials", `${name} + ${password}`);
//   };
// export default () => {
// const [isReady, setIsReady] = useState(false)
// if (!isReady) {
//     return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
// }
//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         <Button onPress={this._onPressButton} title="Press Me" />
//       </View>
//     </View>
//   );
// };
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <TextInput
//             value={name}
//             onChangeText={nameHandler}
//             placeholder="Username"
//             style={styles.input}
//           />
//           <TextInput
//             value={password}
//             onChangeText={passwordHandler}
//             placeholder="Password"
//             secureTextEntry={true}
//             style={styles.input}
//           />
//           <Button title={"Login"} style={styles.input} onPress={onLogin} />
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//   },
// });
