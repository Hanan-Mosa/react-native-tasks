import {Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../../styles';
import  { useState } from 'react';

const TodoForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (title.trim() && description.trim()) {
        onSubmit({ title, description , id: Math.random().toString(), completed: false });
        console.log('New todo added:', { title, description });
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