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

              <View>
                    <Text>
                      Informe seus dados abaixo
                    </Text>
                </View>
            </View>

            <View style={estilos.container}>

                    <Text style={estilos.label}>
                        1. Nome Completo
                    </Text>
                <TextInput
                value={nome}
                onChangeText={setNome}
                style={estilos.input}
                />

                    <Text style={estilos.label}>
                        2. Idade
                    </Text>
                <TextInput
                keyboardType='numeric'
                value={idade}
                onChangeText={setIdade}
                style={estilos.input}
                />

                    <Text style={estilos.label}>
                        3. Email
                    </Text>
                <TextInput
                value={email}
                onChangeText={setEmail}
                style={estilos.input}
                />

                    <Text style={estilos.label}>
                        4. Senha 
                    </Text>
                <TextInput
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
                style={estilos.input}
                />
                
                    <Text style={estilos.label}>
                        5. Telefone
                    </Text>
                <TextInput
                keyboardType='numeric'
                value={telefone}
                onChangeText={setTelefone}
                style={estilos.input}
                />

            </View>

        </View>
    )

}

const estilos = StyleSheet.create({

    container: {
        flex: 7,
        padding: 10
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

    label: {
        fontSize: 14,
        margin: 7,
        fontWeight: '600',
        color: '#222'
    },

    input: {
       borderWidth: 1,
       borderColor: '#ccc',
       borderRadius: 8,
       padding: 12,
       fontSize: 14,
       backgroundColor: '#fff'
    },
})