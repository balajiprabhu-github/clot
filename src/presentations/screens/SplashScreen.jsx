import { StyleSheet, Image, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/app-logo.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E6CEF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 175,
    height: 80,
  },
});
