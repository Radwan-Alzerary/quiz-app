import { StyleSheet, Platform, StatusBar } from "react-native";
console.log(Platform.OS)
export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop:  StatusBar.currentHeight
  }
});
