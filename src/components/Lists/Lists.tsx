import React from 'react';
import { View, Text } from 'react-native';
import { List } from '../List';
import { styles } from './Lists.styles';

type ListsProps = {};

export function Lists(props: ListsProps): JSX.Element {
  return (
    <View>
      <List />
    </View>
  );
}
