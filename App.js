import { NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StorySlider from "./components/StorySlider";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
      <StorySlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: "#000000",
  },
  
});
