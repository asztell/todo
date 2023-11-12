import React, { useCallback } from 'react';
import { Text, Button, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { SCREENS } from '../../constants';
import { styles } from './Home.styles';

export function Home(
  props: ScreenProps & { navigation: { navigate: (arg0: string) => void } },
): JSX.Element {
  // console.log(
  //   'Home props',
  //   JSON.stringify(
  //     props,
  //     (key, val) => {
  //       return typeof val === 'function' ? val + '' : val;
  //     },
  //     4,
  //   ),
  // );
  const { navigation } = props;

  const handleNavigation = useCallback(() => {
    navigation.navigate(SCREENS.Tasks);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title='Go to Tasks' onPress={handleNavigation} />
    </View>
  );
}
