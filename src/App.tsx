import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CheckBox } from './components';
// import { Header } from './components';
// import { Colors } from './global.styles';
import { styles } from './App.styles';

export function App(): JSX.Element {
  type Task = { name: string; checked: boolean };

  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (taskName) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks] as Array<{
          name: string;
          checked: boolean;
        }>;
        updatedTasks[editIndex] = { name: taskName, checked: false };
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, { name: taskName, checked: false }]);
      }
      setTaskName('');
    }
  };

  const handleEditTask = (index: number) => {
    const taskToEdit = tasks[index];
    setTaskName(taskToEdit.name);
    setEditIndex(index);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const onPress = (name: string) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(task => task.name === name);
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  const renderItem = ({ item, index }: { item: Task; index: number }) => (
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        editable={true}
        placeholder='Enter task'
        value={taskName}
        onChangeText={text => setTaskName(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>
          {editIndex !== -1 ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString() + item.name;
        }}
      />
    </View>
  );
}
