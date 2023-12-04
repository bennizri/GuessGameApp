import { Text, StyleSheet, Platform } from "react-native";

const Title = ({ children }) => {
  // the children in this code is the text inside the title
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // -line 15 and 17 are the same.
    //borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
