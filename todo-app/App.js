import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';
// import { v4 as uuidv4 } from 'uuid';
export default function App() {
  const todos = [
    { title: 'Task1', description: 'Description 1', id: 1 },
    { title: 'Task2', description: 'Description 2', id: 2 },
    { title: 'Task3', description: 'Description 3', id: 3 },
    { title: 'Task4', description: 'Description 4', id: 4 },
  ];
  const Item = ({ item }) => (
    <View style={{ padding: 10, borderBottomColor: "#aeaeae", borderBottomWidth: 1, width: '100%' }}>
      <Text style={{ ...styles.text, color: 'black' }}>{item.title}</Text>
      <Text style={{ ...styles.text, color: 'black', fontSize: 15, padding: 10 }}>{item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>TODO APP</Text>
      <TextInput placeholder='todo title' style={styles.input}></TextInput>
      <TextInput placeholder='todo description' style={styles.input}></TextInput>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={{ ...styles.text, fontSize: 20, fontWeight: 'bold' }}>Submit</Text></TouchableOpacity>
      <View style={styles.dividerLine}></View>
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
      <View style={styles.dividerLine}></View>
      <FlatList

        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'flex-start', paddingHorizontal: 10 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
}


