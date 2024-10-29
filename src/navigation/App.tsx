import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useData, ThemeProvider } from '../hooks';
import StackNavigation from './Screens';
import { DataProvider } from '../hooks';

const AppNavigation = () => {
  const { isDark, theme, setTheme } = useData();

  useEffect(() => {
    Platform.OS === 'android' && StatusBar.setTranslucent(true);
    StatusBar.setBarStyle(isDark ? 'light-content' : 'dark-content');
    return () => {
      StatusBar.setBarStyle('default');
    };
  }, [isDark]);


  return (
    <DataProvider>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <NavigationContainer >
          <StackNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </DataProvider>

  );
};

export default AppNavigation