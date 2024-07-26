import { Image, View } from "react-native";
import React, { useEffect } from "react";
import AppLogo from "../../../assets/app-logo.png";
import KeyStore from "../../data/local/KeyStore";
import styles from "../components/styles";
import Route from "../../resources/routes";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const userToken = await KeyStore.get("userToken");
        if (userToken) {
         navigation.replace(Route.STACK_HOME_SCREEN);
        } else {
          navigation.replace(Route.SIGN_IN_SCREEN);
        }
      } catch (e) {
        console.error(e);
        navigation.replace(Route.SIGN_IN_SCREEN);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Image source={AppLogo} style={styles.appLogoImage} />
    </View>
  );
}
