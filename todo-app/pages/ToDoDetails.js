import { useRoute } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { styles } from '../styles';

const ToDoDetails = () => {
  const {item} = useRoute().params;
  console.log(item);
    return (
      <>
      <View style ={{...styles.todoItem ,flexDirection:"column", alignItems:'flex-start'}}>
      <Text style={{...styles.headertext,fontSize:18}}>Title:</Text>
      <Text style={{...styles.text,fontSize:16 , paddingLeft:10, color:"black" , margin:0}}>{item.title}</Text>
    </View>
         <View style ={{...styles.todoItem ,flexDirection:"column", alignItems:'flex-start'}}>
      <Text style={{...styles.headertext,fontSize:18}}>Description:</Text>
      <Text style={{...styles.text,fontSize:16 , paddingLeft:10, color:"black"}}>{item.description}</Text>
    </View>
          <View style ={{...styles.todoItem ,flexDirection:"column", alignItems:'flex-start'}}>
      <Text style={{...styles.headertext,fontSize:18}}>Completed:</Text>
      <Text style={{...styles.text,fontSize:16 , paddingLeft:10, color:"black"}}>{item.completed?'Completed':'Not Completed'}</Text>
    </View>
      </>
    )
}

export default ToDoDetails