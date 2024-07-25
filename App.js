import SplashScreen from "./src/presentations/screens/SplashScreen";
import SignInScreen from "./src/presentations/screens/SignInScreen";
import HomeScreen from "./src/presentations/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateAccountScreen from "./src/presentations/screens/CreateAccountScreen";
import Route from "./src/resources/routes";
const Stack = createStackNavigator();

export default function App() {
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
}
