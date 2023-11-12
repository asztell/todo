import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, Text, useColorScheme } from 'react-native';
import { Colors } from '../../global.styles';
import { styles } from './Header.styles';

export const Header = (): ReactNode => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole='image'
      testID='new-app-screen-header'
      source={require('../../images/groceries.jpg')}
      style={[
        styles.background,
        {
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      imageStyle={styles.logo}>
      <Text style={styles.text}>chopin lista</Text>
    </ImageBackground>
  );
};
