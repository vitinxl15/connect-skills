import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../lib/supabase";
import { styles } from "./styles";


export function Register() {
      const router = useRouter();
 
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
 
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erroGlobal, setErroGlobal] = useState("");
 
  const canSubmit =
    nome.trim() &&
    email.trim() &&
    senha.length >= 6 &&
    confirmarSenha === senha &&
    !loading;
 
  const handleSignUp = async () => {
    try {
      setLoading(true);
      setErroGlobal("");
      const {data, error} = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password: senha,
        options: {
            data: {name: nome.trim()}
        },
      });
      if (error) {
        setErroGlobal(error.message || "Falha ao cadastrar. Tente novamente!");
      }
      router.replace("./(auth)/index");
    } catch {
      setErroGlobal("Falha ao tentar cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Cadastro</Text>

                <Text style = {styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                />
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.passwordInput}
                value={senha}
                onChangeText={setSenha}
                placeholder="Senha"
                secureTextEntry={!showSenha}
                
            />
        <TouchableOpacity
                onPress={() => setShowSenha(!showSenha)}
                style={styles.togglePassword}
           >
        <Ionicons
                name={showSenha ? "eye" : "eye-off"}
                size={20}
                color="#333"
            />
        </TouchableOpacity>
           </View>

        <Text style={styles.label}>Confirmar Senha</Text>
           <View style={styles.passwordContainer}>
             <TextInput
              style={styles.passwordInput}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirmar Senha"
              secureTextEntry={!showConfirmar}
           />
        <TouchableOpacity
              onPress={() => setShowConfirmar(!showConfirmar)}
              style={styles.togglePassword}
            >
        <Ionicons
              name={showConfirmar ? "eye" : "eye-off"}
              size={20}
              color="#333"
           />
       </TouchableOpacity>
            </View>
                {erroGlobal ? <Text style={styles.error}>{erroGlobal}</Text> : null}

                <TouchableOpacity
                    style={[styles.button, !canSubmit && styles.buttonDisabled]}
                    onPress={handleSignUp}
                    disabled={!canSubmit}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("./(auth)/index")}>
                    <Text style={styles.backText}>Voltar para Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}