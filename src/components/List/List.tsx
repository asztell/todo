import React, { useState, useCallback } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, Task, TaskType } from '..';
import { styles } from './List.styles';

export type RenderedTaskType = { item: TaskType; index: number };

type ListProps = {};

export function List(props: ListProps): JSX.Element {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = useCallback((): void => {
    if (taskName) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = { name: taskName, checked: false };
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, { name: taskName, checked: false }]);
      }
      setTaskName('');
    }
  }, [editIndex, taskName, tasks]);

  const handleEditTask = useCallback(
    (index: number): void => {
      const taskToEdit = tasks[index];
      setTaskName(taskToEdit.name);
      setEditIndex(index);
    },
    [setEditIndex, setTaskName, tasks],
  );

  const handleDeleteTask = useCallback(
    (index: number): void => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    },
    [setTasks, tasks],
  );

  const handleToggleChecked = useCallback(
    (name: string): void => {
      const updatedTasks = [...tasks];
      const index = updatedTasks.findIndex(task => task.name === name);
      updatedTasks[index].checked = !updatedTasks[index].checked;
      setTasks(updatedTasks);
    },
    [setTasks, tasks],
  );

  const renderItem = useCallback(
    ({ item, index }: RenderedTaskType): JSX.Element => (
      <Task
        task={item}
        index={index}
        handleToggleChecked={handleToggleChecked}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />
    ),
    [handleDeleteTask, handleEditTask, handleToggleChecked],
  );

  const onChangeText = useCallback(
    (text: string): void => {
      setTaskName(text);
    },
    [setTaskName],
  );

  const keyExtractor = useCallback((item: TaskType, index: number): string => {
    return index.toString() + item.name;
  }, []);

  // TODO: localize
  const addButtonLabel = editIndex !== -1 ? 'Update Task' : 'Add Task';
  const placeholder = 'Enter task';

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        editable={true}
        placeholder={placeholder}
        value={taskName}
        onChangeText={onChangeText}
      />
      <Button onPress={handleAddTask} label={addButtonLabel} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
