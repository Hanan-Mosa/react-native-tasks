import {  Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';
import TodoForm from './src/components/TodoForm.js';
import TodoList from './src/components/TodoList.js';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
 const [todos, setTodos] = useState([]);

 useEffect(() => {
    const fetchTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error fetching todos from AsyncStorage:', error);
      }
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <View style={styles.container}>
       <Text style={styles.headertext}>TODO APP</Text>
      <TodoForm onSubmit={addTodo} />
      <View style={styles.dividerLine}/>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn} >
          <Text style={{ ...styles.text }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ ...styles.text, color: 'black' }}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ ...styles.text, color: 'black' }}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine}/>
     {todos.length > 0 && <TodoList todos={todos} onRemove={removeTodo} />}
    </View>
  );
}


