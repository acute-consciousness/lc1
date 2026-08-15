import {Colours} from './Colours';
// Source - https://stackoverflow.com/a/55017347
// Posted by Rishav Kumar
// Retrieved 2026-03-17, License - CC BY-SA 4.0
import { StyleSheet, Platform, StatusBar } from "react-native"; 
export default StyleSheet.create({
  AndroidSafeArea: {
    // flex: 1,
    // backgroundColor: Colours.creeamish.one,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
