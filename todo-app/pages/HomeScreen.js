import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles.js';
import TodoForm from '../src/components/TodoForm.js';
import TodoList from '../src/components/TodoList.js';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  // const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);
  const [displayTodos, setDisplayTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

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
    console.log(todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }
  const completeTodo = (id) => {
    console.log('Completing todo with id:', id);
    setTodos((prevTodos) =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const filterCompletedTodos = () => {
    return todos.filter(todo => todo.completed);
  }
  const filterActiveTodos = () => {
    return todos.filter(todo => !todo.completed);
  }
  useEffect(() => {
    if (activeFilter === 'all') {
      setDisplayTodos(todos);
    } else if (activeFilter === 'active') {
      setDisplayTodos(filterActiveTodos());
    } else if (activeFilter === 'done') {
      setDisplayTodos(filterCompletedTodos());
    }
  }, [todos, activeFilter]);
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>TODO APP</Text>
      <TodoForm onSubmit={addTodo} />
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={activeFilter === 'all' ? styles.activeFilterBtn : styles.filterBtn}
          onPress={() => {
            setActiveFilter('all');

          }}
        >
          <Text style={activeFilter === 'all' ? styles.text : styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeFilter === 'active' ? styles.activeFilterBtn : styles.filterBtn}
          onPress={() => {
            setActiveFilter('active');

          }}
        >
          <Text style={activeFilter === 'active' ? styles.text : styles.filterText}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeFilter === 'done' ? styles.activeFilterBtn : { ...styles.filterBtn }}
          onPress={() => {
            setActiveFilter('done');

          }}
        >
          <Text style={activeFilter === 'done' ? styles.text : styles.filterText}>Done</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.dividerLine} />

      {displayTodos.length > 0 ? (
        <TodoList
          todos={displayTodos}
          onRemove={removeTodo}
          onComplete={completeTodo}
        />
      ) : (
        <Text style={{ ...styles.text, color: 'black', fontSize: 16 }}>No tasks available</Text>
      )}

    </View>
  );
}


export default HomeScreen;