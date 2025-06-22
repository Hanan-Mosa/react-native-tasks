import { Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../../styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Redux/Slices/todo_slice';

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (title.trim() && description.trim()) {
            const todo = { title, description, id: Math.random().toString(), completed: false }
            console.log('New todo added:', { title, description });
            dispatch(addTodo(todo));
            setTitle('');
            setDescription('');
        }
    }
    return (
        <>
            <TextInput placeholder='todo title' style={styles.input} onChangeText={text => setTitle(text)} value={title}></TextInput>
            <TextInput placeholder='todo description' style={styles.input} onChangeText={text => setDescription(text)} value={description}></TextInput>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={{ ...styles.text, fontSize: 20, fontWeight: 'bold' }}>Save</Text></TouchableOpacity>

        </>
    )
}

export default TodoForm