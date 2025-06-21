import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../styles';
import { useRoute } from '@react-navigation/native';
import TodoItem from '../src/components/TodoItem';

const CompletedTasks = () => {
  const { completedTodos } = useRoute().params;
  console.log('Completed Todos:', completedTodos);
  const renderItem = ({ item }) => (
    <View style={{  width: '90%', padding: 10, borderWidth: 1, borderColor: '#ccc' ,margin:10,borderRadius: 10, backgroundColor: '#fff'}}>
      <Text style={{ ...styles.text, color: 'black',fontWeight:'600' }}>{item.title}</Text>
      <Text style={{ ...styles.text, color: 'black', fontSize: 14 ,paddingLeft: 10}}>{item.description}</Text>

    </View>
  );
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>CompletedTasks</Text>
      <View style={styles.dividerLine} />

      {completedTodos.length > 0 ? (
        <FlatList
          style={{ width: '100%' }}
          contentContainerStyle={{ flexDirection: 'column', gap: 5, width: '100%', marginHorizontal: 10 }}
          data={completedTodos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem({ item })} />
      ) : (
        <Text>No completed tasks</Text>
      )}
    </View>
  );
  
}

export default CompletedTasks