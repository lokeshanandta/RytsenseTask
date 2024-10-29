import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AppIntro,
  DashBoard,
  AppIntroSecondScreen,
  AddNewTask
} from '../screens';



const Stack = createNativeStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="appIntro"
        component={AppIntro}
      />
      <Stack.Screen
        name="appIntroSecond"
        component={AppIntroSecondScreen}
      />
      <Stack.Screen
        name="dashBoard"
        component={DashBoard}
      />
      <Stack.Screen
        name="addTask"
        component={AddNewTask}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation