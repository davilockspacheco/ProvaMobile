import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';

export default function Login({navigation}){
    return (
    <View style={styles.container}>
        <Text style={styles.txt}>Tela de Login</Text>
        <View>
            <TextInput placeholder='E-mail' style={styles.entrada}></TextInput>
            <TextInput placeholder='Senha' style={styles.entrada}></TextInput>
        </View>
        <TouchableOpacity style={styles.botao}  onPress={()=> navigation.navigate('DrawerNavigation')}>
            <Text style={styles.txtbotao} >Entrar</Text>
        </TouchableOpacity>
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
    txt: {
        color: 'rgb(255, 255, 255)',
        fontSize: 30,
    },
    entrada: {
        fontSize: 20,
        borderWidth: 2,
        margin:10,
        borderRadius: 10,
        padding: 2,
        borderColor:  '#FFFFFF'
    },
    botao: {
        backgroundColor:  '#000000',
        padding: 8,
        borderRadius: 10,
    },
    txtbotao: {
        fontSize: 20,
        color: 'white'
    }
});
  