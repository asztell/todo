import React from 'react';
import { View } from 'react-native';
import { TaskList } from '../TaskList';
// import { styles } from './Lists.styles';

type TaskListsProps = {};

export function TaskLists(props: TaskListsProps): JSX.Element {
  return (
    <View>
      {/* TODO: iterate from persistent state */}
      {/* TODO: show default screen when no lists */}
      <TaskList />
    </View>
  );
}
