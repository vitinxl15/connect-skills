import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";


export function Register() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registerError, setRegisterError] = useState("");

    const canSubmit = email.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "" && !loading;

    const handleRegister = async () => {
        if (name.trim() === "") {
            setName("");
            return;
        }
        
        if (password !== confirmPassword) {
            setRegisterError("As senhas não coincidem!");
            return;
        }
        try {
            setLoading(true);
            setRegisterError("");
            await new Promise((r) => setTimeout(r, 600));

            if (email.toLowerCase() === "aluno@teste.com" && password === "123@senac") {
                Alert.alert("Cadastro realizado com sucesso!");
                router.push("/(auth)/login");
            } else {
                setRegisterError("E-mail ou senha inválidos!");
            }
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
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha"
                    secureTextEntry={!showPassword}
                />

                <Text style={styles.label}>Confirmar Senha</Text>
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirmar Senha"
                    secureTextEntry={!showPassword}
                />

                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={styles.togglePassword}>
                        {showPassword ? "Ocultar Senha" : " Mostrar Senha"}

                        <Ionicons 
                        name={showPassword ? "eye" : "eye-off"}
                            size={20}
                            color="#333"
                        />
                    </Text>
                </TouchableOpacity>

                {registerError ? <Text style={styles.error}>{registerError}</Text> : null}

                <TouchableOpacity
                    style={[styles.button, !canSubmit && styles.buttonDisabled]}
                    onPress={handleRegister}
                    disabled={!canSubmit}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                    <Text style={styles.backText}>Voltar para Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}