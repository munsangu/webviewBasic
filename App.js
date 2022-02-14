import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const MYLINK = "https://relaxed-turing-e7ea57.netlify.app";

// ios 이상없음, android 안됨
// export default function App() {
//   return (
//     <View style={{ width: "100%", height: "100%" }}>
//       <Text style={styles.text}>WEBVIEW why don't loading it?</Text>
//       <View style={styles.container}>
//         <WebView
//           style={styles.test}
//           onLoad={console.log("Looooood!")}
//           source={{ url: MYLINK }}
//         ></WebView>
//       </View>
//       <StatusBar style="auto"></StatusBar>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     // alignItems: "center",
//     // justifyContent: "center",
//     // borderColor: "#fff",
//     // borderWidth: 2,
//     // borderStyle: "solid",
//   },
//   text: {
//     fontSize: 30,
//     marginTop: Constants.statusBarHeight,
//     marginBottom: 20,
//     // fontWeight: "700",
//     textAlign: "center",
//     color: "#2598eb",
//   },
//   test: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
// });

// ios, android 둘 다 됨
export default function App() {
  return <WebView style={styles.container} source={{ uri: MYLINK }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
