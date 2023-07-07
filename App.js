import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Login';
import HomeScreen from './components/HomeScreen';
import TimetableScreen from './components/TimetableScreen';
import AddClassScreen from './components/AddClassScreen';
import EditClassScreen from './components/EditClassScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timetable" component={TimetableScreen} />
        <Stack.Screen name="AddClass" component={AddClassScreen} />
        <Stack.Screen name="EditClass" component={EditClassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}