import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from '../CheckBox';
import { styles } from './Task.styles';

export type TaskType = { name: string; checked: boolean };

export type TaskProps = {
  task: TaskType;
  index: number;
  handleToggleChecked: (name: string) => void;
  handleEditTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
};

export function Task({
  task,
  index,
  handleToggleChecked,
  handleEditTask,
  handleDeleteTask,
}: TaskProps) {
  return (
    <View style={styles.task}>
      <CheckBox
        name={task.name}
        checked={task.checked}
        onPress={handleToggleChecked}
      />
      <Text style={styles.itemList}>{task.name}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
