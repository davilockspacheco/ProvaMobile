import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
export default function Fale(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return (
    <View style={styles.container}>
        <TextInput placeholder='Nome' style={styles.input} onChangeText={setNome}></TextInput>
        <TextInput placeholder='Email' style={styles.input}  onChangeText={setEmail}></TextInput>
        <TextInput placeholder='Mensagem' style={styles.input}  onChangeText={setMsg}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#585858',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 60,
    },
    text: {
        color: 'rgb(255, 255, 255)',
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        margin:10,
        borderRadius: 10,
        padding: 2,
        borderColor:  '#FFFFFF'
    },
    img:{
        width: 200,
        height:200,
    },
})