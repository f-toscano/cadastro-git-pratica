import {Text, View, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

export default function Index() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('') 
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')

    return(

        <View>
            <View style={estilos.titleLayout}>
                <Text style={estilos.titulo}>
                    CADASTRO
                </Text>

              <View style={estilos.layout}>
                    <Text>
                      siga as informações abaixo
                    </Text>
                </View>
            </View>

            <View style={estilos.container}>

            <TextInput
            placeholder='Nós diga seu nome'
            placeholderTextColor={'white'}
            value={nome}
            onChangeText={setNome}
            style={estilos.input}
            />

<<<<<<< HEAD
            <TextInput
            placeholder='Nós diga sua idade'
            placeholderTextColor={'white'}
            keyboardType='numeric'
            value={idade}
            onChangeText={setIdade}
            style={estilos.input}
            />

            <TextInput
            placeholder='Nós diga seu email'
            placeholderTextColor={'white'}
            value={email}
            onChangeText={setEmail}
            style={estilos.input}
            />

            <TextInput
            placeholder='Nós diga sua senha'
            placeholderTextColor={'white'}
            keyboardType='numeric'
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
            style={estilos.input}
            />

            </View>
    
=======
        <TextInput
        placeholder='Nós diga seu número de telefone'
        placeholderTextColor={'white'}
        keyboardType='numeric'
        value={telefone}
        onChangeText={setTelefone}
        style={estilos.input}
        />

>>>>>>> feature/campo-telefone
        </View>
    )

}

const estilos = StyleSheet.create({

    container: {
        flex: 1
    },

    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flex: 1
    },

    layout: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    titulo: {
        textAlign: 'center',
        fontSize: 20
    },

    input: {

        borderWidth: 1,
        padding: 10,
        margin: 10,
        backgroundColor: 'gray'
    },
})