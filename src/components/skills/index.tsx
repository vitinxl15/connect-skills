import React from 'react';
import { Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { styles } from './styles';


export function Skills() {
    const [selected, setSelected] = React.useState("");

    const data = [
        
        {key:'1', value:'Programação'},
        {key:'2', value:'Musica'},
        {key:'3', value:'Culinária'},
        {key:'4', value:'Ciencias Exatas'},
        {key:'5', value:'Ciencias Humanas'},
        {key:'6', value:'Edição de imagem e video'},
        {key:'7', value:'Pintura e Desenho'},
        {key:'8', value:'Manutencao de Computadores'},

    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Habilidades</Text>
            <SelectList 
                setSelected={(value) => setSelected( value )}
                data={data}
                save="value"
            />
        </View>

    )

};