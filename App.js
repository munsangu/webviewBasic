import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const MYLINK = "https://midamsw.dbmanager.kr/account/login";

// android 뒤로가기 버튼 클릭 시, 종료 확인 안내 문구 표시
const App = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "앱을 종료하시겠습니까?", [
        {
          text: "취소",
          onPress: () => null,
        },
        { text: "확인", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text style={styles.text}>WEBVIEW</Text>
      <View style={styles.container}>
        <WebView
          style={styles.test}
          onLoad={console.log("Looooood!")}
          source={{ uri: MYLINK }}
        ></WebView>
      </View>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    // marginTop: Constants.statusBarHeight,
    fontWeight: "700",
    textAlign: "center",
    color: "#2598eb",
  },
  test: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});

export default App;
