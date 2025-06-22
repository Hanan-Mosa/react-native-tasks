import AsyncStorage from "@react-native-async-storage/async-storage";
const TODOS ='ToDos'
export const saveTodos =async(todos)=>{
    try {
    await AsyncStorage.setItem(TODOS, JSON.stringify(todos));
  } catch (e) {
    console.log('Error saving todos:', e);
  }

}
export const fetchTodos=async()=>{
      try {
    const json = await AsyncStorage.getItem(TODOS);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.log('Error loading todos:', e);
    return [];
  }
}
