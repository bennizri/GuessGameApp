import { View, StyleSheet, Dimensions } from "react-native";
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 300 ? 18 : 36,
    backgroundColor: "#3b021f",
    marginHorizontal: 24,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
