import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './app/src/view/screens/SignInScreen';
import SignoUpScreen from './app/src/view/screens/SignUpScreen';
import LandingScreen from './app/src/view/screens/LandingScreen';
import HomeScreen from './app/src/view/screens/HomeScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header:()=>null}}>
      <Stack.Screen name="Signin" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignoUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;