import { FlatList } from "react-native";
import TodoItem from "./TodoItem";


const TodoList = ({ todos , onRemove }) => {

  return (
   <FlatList
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'flex-start', paddingHorizontal: 10 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem  item={item} onRemove={onRemove} />}
      />
  )
}

export default TodoList