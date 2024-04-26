import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Routes} from "~/navigation/Routes";
import LoginScreen from "~/screens/LoginScreen";
import { TermsScreen } from "~/screens/TermsScreen";
import { StarshipFeedScreenApi } from "~/screens/StarshipFeedScreenApi";
import { StarshipFeedScreenDetail } from "~/screens/StarshipFeedScreenDetail";

const Stack = createNativeStackNavigator();
export function Navigator() {
  return (
    <NavigationContainer>
      {/* screenOptions={{ headerShown: false }} */}
      <Stack.Navigator > 
        <Stack.Screen
          name={Routes.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <Stack.Screen
          name={Routes.TERMS_SCREEN}
          component={TermsScreen}
        />
        <Stack.Screen
          name={Routes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreenApi}
        />
        <Stack.Screen
          name={Routes.STARSHIP_DETAIL_SCREEN}
          component={StarshipFeedScreenDetail}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
