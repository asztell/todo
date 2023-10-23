import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from '../CheckBox';
import { ItemType } from '../../App';
import { styles } from './Item.styles';

export type ItemProps = {
  item: ItemType;
  index: number;
  onPress: (name: string) => void;
  handleEditTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
};

export function Item({
  item,
  index,
  onPress,
  handleEditTask,
  handleDeleteTask,
}: ItemProps) {
  return (
    <View style={styles.task}>
      <CheckBox name={item.name} checked={item.checked} onPress={onPress} />
      <Text style={styles.itemList}>{item.name}</Text>
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
