import {  StyleSheet,Platform  } from 'react-native';
export default StyleSheet.create({
    /*
     * Removed for brevity
     */container: {
      height: 56,
      marginTop: Platform.OS == "ios" ? 20 : 0
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#fff",
    zIndex: 1,
    fontSize: 18,
    lineHeight: 23,
    fontFamily: "CircularStd-Bold"
   }
    
  });
