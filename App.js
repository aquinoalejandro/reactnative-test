import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/views/Home';
import Login from './src/views/Login';
import Api from './src/views/Api';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: false }} component={Home}/>
        <Stack.Screen name="login" options={{ headerShown: false }} component={Login}/>
        <Stack.Screen name="api" options={{ headerShown: false }} component={Api}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}