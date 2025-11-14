import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

 
export  function ProfileScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [habilidade, setHabilidade] = useState("");
 
  const habilidades = [
        { key: '1', value: 'Programação' },
        { key: '2', value: 'Musica' },
        { key: '3', value: 'Culinária' },
        { key: '4', value: 'Ciencias Exatas' },
        { key: '5', value: 'Ciencias Humanas' },
        { key: '6', value: 'Edição de imagem e video' },
        { key: '7', value: 'Pintura e Desenho' },
        { key: '8', value: 'Manutencao de Computadores' },
  ];
 
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", padding: 20 }}>
      
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: "#e0e0e0",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#555" }}>JV</Text>
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>Seu Perfil</Text>
        <Text style={{ fontSize: 14, color: "#777" }}>Gerencie suas informações pessoais</Text>
      </View>
 
     
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: "#333", marginBottom: 6 }}>Nome</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#fafafa",
          }}
          placeholder="Seu nome completo"
          value={nome}
          onChangeText={setNome}
        />
      </View>
 
     
      <View style={{ marginBottom: 5 }}>
        <Text style={{ fontSize: 16, color: "#333", marginBottom: 6 }}>E-mail</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#fafafa",
          }}
          placeholder="voce@exemplo.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>
        Alterar e-mail pode exigir confirmação.
      </Text>
 
      
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: "#333", marginBottom: 6 }}>Nova senha (opcional)</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            backgroundColor: "#fafafa",
            paddingRight: 12,
          }}
        >
          <TextInput
            style={{ flex: 1, padding: 12, fontSize: 16 }}
            placeholder="senha"
            secureTextEntry={!mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Ionicons
              name={mostrarSenha ? "eye-off" : "eye"}
              size={22}
              color="#888"
            />
          </TouchableOpacity>
        </View>
      </View>
 
     
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 16, color: "#333", marginBottom: 6 }}>
          Habilidade que você ensina
        </Text>
        <SelectList
          setSelected={(val: string) => setHabilidade(val)}
          data={habilidades}
          placeholder="Ex.: Inglês, Excel, Violão..."
          boxStyles={{
            borderRadius: 10,
            backgroundColor: "#fafafa",
            borderColor: "#ccc",
          }}
          inputStyles={{ fontSize: 16 }}
          dropdownStyles={{ borderRadius: 10 }}
        />
      </View>
 
     
      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          paddingVertical: 14,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 40,
        }}
        onPress={() => console.log("Dados salvos:", { nome, email, habilidade })}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Salvar alterações</Text>
        
        
      </TouchableOpacity>
      
    </ScrollView>
  );
}