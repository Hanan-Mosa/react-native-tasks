import { FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { styles } from "../../styles";
import { FilterationTypes } from "../../Redux/Slices/todo_slice";


const TodoList = () => {
  const { todos, filter } = useSelector((state) => state.todosState);
  return (
    <FlatList
      style={styles.todosContainer}
      contentContainerStyle={{ alignItems: 'flex-start', paddingHorizontal: 10 }}
      data={todos.filter((todo)=>{
        if(filter === FilterationTypes.ALL) return true;
        if(filter === FilterationTypes.ACTIVE) return !todo.completed;
        if(filter===FilterationTypes.Done) return todo.completed;
      })}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  )
}

export default TodoList