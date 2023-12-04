import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "./constants/colers";
import PrimaryButton from "../components/ui/PrimaryButton";
const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGames }) => {
  const { width, height } = useWindowDimensions();
  console.log(width, height);
  let imageSize = 300;
  if (width > 900) {
    imageSize = 150;
  }
  if (height < 450) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!!</Title>
        <View style={[styles.imageConainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          round to guess the number
          <Text style={styles.highlight}>{" " + userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGames}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};
export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;\
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageConainer: {
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  screen: {
    flex: 1,
  },
});
