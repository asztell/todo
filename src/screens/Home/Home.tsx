import React, { useCallback } from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import { styles } from './Home.styles';

type HomeProps = {
  navigation: any;
};

export function Home(props: HomeProps): JSX.Element {
  const { navigation } = props;

  const handleNavigation = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Text>Home</Text>
      <Button title='Go to Lists' onPress={handleNavigation} />
    </View>
  );
}
