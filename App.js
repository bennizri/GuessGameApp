import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreens from "./screens/StartGameScreen";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./screens/constants/colers";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("../GuessGameApp/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../GuessGameApp/assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);

    setGameIsOver(false);
  };
  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  };
  let screen = <StartGameScreens onPickNumber={pickedNumberHandler} />;
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGames={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
      <LinearGradient
        colors={[Colors.primary700, Colors.primary600]}
        style={styles.rootScreen}
      >
        <ImageBackground />
        <ImageBackground
          source={require("../GuessGameApp/assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgrundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgrundImage: {
    opacity: 0.15,
  },
});
