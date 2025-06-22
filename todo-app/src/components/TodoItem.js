import { View, Text ,TouchableOpacity, Pressable} from 'react-native'
import { styles } from '../../styles'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Paths } from '../../routes/Route';
import { useDispatch } from 'react-redux';
import { markAsCompleted, removeTodo } from '../../Redux/Slices/todo_slice';

const TodoItem = ({item}) => {
  const {navigate} = useNavigation();
  const dispatch =useDispatch();
  return (
    <Pressable onPress={()=>navigate(Paths.DETAILS,{item})}>
    <View style={styles.todoItem}>
      <Text style={{ ...styles.text, color: 'black' }}>{item.title}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
    
      
      <AntDesign name={item.completed?"checkcircle":"checkcircleo"} size={24} color={item.completed?"green":'black'} onPress={()=>dispatch(markAsCompleted(item.id))} />
      
       <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
        <Feather name="trash-2" size={24} color="red" />
      </TouchableOpacity>
      </View>
      
    </View>
    </Pressable>
  )
}

export default TodoItem