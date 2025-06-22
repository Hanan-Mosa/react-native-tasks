import { Text, View } from 'react-native';
import { styles } from '../styles.js';
import TodoForm from '../src/components/TodoForm.js';
import TodoList from '../src/components/TodoList.js';
import { useEffect } from 'react';
import Filteration from '../src/components/Filteration.js';
import { useSelector, useDispatch } from 'react-redux';
import { saveTodos, fetchTodos } from '../src/components/storage.js'
import { setTodos } from '../Redux/Slices/todo_slice.js';
const HomeScreen = () => {
  const { todos } = useSelector((state) => state.todosState);
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      const todos = await fetchTodos();
      dispatch(setTodos(todos));
    };

    load();
  }, []);
  
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>TODO APP</Text>
      <TodoForm />
      <Filteration />

      <TodoList />

    </View>
  );
}


export default HomeScreen;