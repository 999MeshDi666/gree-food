import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './pages/Intro';
import Main from './pages/Main';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Auth from './pages/Auth';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Group
            screenOptions={{
              presentation: 'transparentModal',
              animation: 'fade',
            }}
          >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Main" component={Main} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
