import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { styles } from './styles';



export function Skills() {
    const [selectedTeach, setSelectedTeach] = useState("");
    const [selectedLearn, setSelectedLearn] = useState("");

    const data = [

        { key: '1', value: 'Programação' },
        { key: '2', value: 'Musica' },
        { key: '3', value: 'Culinária' },
        { key: '4', value: 'Ciencias Exatas' },
        { key: '5', value: 'Ciencias Humanas' },
        { key: '6', value: 'Edição de imagem e video' },
        { key: '7', value: 'Pintura e Desenho' },
        { key: '8', value: 'Manutencao de Computadores' },

    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Habilidades</Text>

            <View>
                <Text style={styles.title}>O que deseja ensinar</Text>
                <SelectList
                    setSelected={setSelectedTeach}
                    placeholder="Selecione uma habilidade para ser ensinada"
                    data={data}
                    save="value"
                    boxStyles={styles.selectList}
                />
            </View>

            <View>

                <Text style={styles.title}>O que deseja aprender</Text>
                <SelectList
                    setSelected={setSelectedLearn}
                    placeholder="Selecione uma habilidade para aprender"
                    data={data}
                    save="value"
                    boxStyles={styles.selectList}
                />
            </View>
            


            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text style={styles.button}>Voltar</Text>
            </TouchableOpacity>
        </View>


    )

};