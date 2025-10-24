import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    form: {
        width: "100%",
        maxWidth: 380,
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 12,
        elevation: 4,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    label: {
        fontSize: 16,
        color: "#333",
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#fafafa",
    },
    togglePassword: {
        textAlign: "right",
        color: "#007BFF",
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonDisabled: {
        backgroundColor: "#007BFF",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    error: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
    backText: {
        textAlign: "center",
        color: "#007BFF",
        marginTop: 20,
        fontSize: 15,
    },

});