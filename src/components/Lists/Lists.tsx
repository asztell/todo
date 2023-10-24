import React from 'react';
import { View } from 'react-native';
import { List } from '../List';
// import { styles } from './Lists.styles';

type ListsProps = {};

export function Lists(props: ListsProps): JSX.Element {
  return (
    <View>
      {/* TODO: iterate from persistent state */}
      {/* TODO: show default screen when no lists */}
      <List />
    </View>
  );
}
