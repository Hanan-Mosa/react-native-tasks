import { View, Text ,TouchableOpacity} from 'react-native'
import { styles } from '../../styles'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const TodoItem = ({item, onRemove , onComplete}) => {
  return (
    <View style={styles.todoItem}>
      <Text style={{ ...styles.text, color: 'black' }}>{item.title}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
    
      <TouchableOpacity onPress ={() => onComplete(item.id)}>
      {item.completed ? <AntDesign name="checkcircle" size={24} color="green" /> : <AntDesign name="checkcircleo" size={24} color="black" />}
      </TouchableOpacity>
       <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Feather name="trash-2" size={24} color="red" />
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default TodoItem