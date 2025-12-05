import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { styles } from "./styles";


export function DataUser() {
      const router = useRouter();
      const [telefone, setTelefone] = useState("");
      const [cpf, setCpf] = useState("");
      const [dataNascimento, setDataNascimento] = useState("");
      
     

    return (
        <SafeAreaView style={styles.safeArea}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoiding}
              >
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                  
                  <View style={styles.header}>
                    <Text style={styles.brand}>Connect Skills</Text>
                    <Text style={styles.title}>Criar conta</Text>
                    <Text style={styles.subtitle}>
                      Junte-se à rede para aprender e ensinar habilidades.
                    </Text>
                  </View>

       <View style={styles.card}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Telefone</Text>
              <View style={styles.inputWithIcon}>
                <Ionicons name="phone-portrait" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Telefone"
                  placeholderTextColor="#9ca3af"
                  autoCapitalize="words"
                  value={telefone}
                  onChangeText={setTelefone}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>CPF</Text>
              <View style={styles.inputWithIcon}>
                <Ionicons name="person" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="CPF"
                  placeholderTextColor="#9ca3af"
                  autoCapitalize="words"
                  value={cpf}
                  onChangeText={setCpf}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Data de Nascimento</Text>
              <View style={styles.inputWithIcon}>
                <Ionicons name="person" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Data de Nascimento"
                  placeholderTextColor="#9ca3af"
                  autoCapitalize="words"
                  value={dataNascimento}
                  onChangeText={setDataNascimento}
                />
              </View>
            </View>

            
          </View>
                </ScrollView>
              </KeyboardAvoidingView>
            </SafeAreaView>
          );
  }
