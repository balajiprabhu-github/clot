import SplashScreen from "../presentations/screens/SplashScreen";
import SignInScreen from "../presentations/screens/SignInScreen";
import HomeScreen from "../presentations/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccountScreen from "../presentations/screens/CreateAccountScreen";
import Route from "../resources/routes";
const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.SPLASH_SCREEN}>
        <Stack.Screen
          name={Route.SPLASH_SCREEN}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Route.SIGN_IN_SCREEN}
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Route.CREATE_ACCOUNT_SCREEN}
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Route.HOME_SCREEN}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
