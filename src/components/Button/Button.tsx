import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Button.styles';

export function Button({
  onPress,
  label,
}: {
  onPress: () => void;
  label: string;
}): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
