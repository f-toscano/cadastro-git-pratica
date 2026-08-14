import {Text, View, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function Index() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState('') 
}

const estilos = StyleSheet.create({

    container: {
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