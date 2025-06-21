import { View, Text ,TouchableOpacity} from 'react-native'
import { styles } from '../../styles'
import Feather from '@expo/vector-icons/Feather';

const TodoItem = ({item, onRemove}) => {
  return (
    <View style={styles.todoItem}>
      <Text style={{ ...styles.text, color: 'black' }}>{item.title}</Text>
      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Feather name="trash-2" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem