import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  form: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333333ff",
    textAlign: "center",
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: "#03122bff",
    marginBottom: 5,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#333",
    paddingRight: 40, 
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },

  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },

  togglePassword: {
    paddingHorizontal: 10,
  },

  error: {
    color: "red",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: "#3b82f6",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  backText: {
    color: "#007AFF",
    textAlign: "center",
    marginTop: 15,
  },
});
