import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },
  keyboardAvoiding: { flex: 1 },
  container: {
    flexGrow: 1,
    paddingHorizontal: width * 0.08,
    paddingTop: 16,
    paddingBottom: width * 0.2,
    backgroundColor: "#DFA46A",
  },

  
  header: { alignItems: "center", marginVertical: width * 0.1},
  brand: { fontSize: 14, color: "#060607ff", letterSpacing: 1, textTransform: "uppercase" as const },
  title: { fontSize: 28, fontWeight: "800", color: "#111827", marginTop: 4 },
  subtitle: { fontSize: 14, color: "#000000ff", marginTop: 6, textAlign: "center" },


  card: {
    backgroundColor: "#F2D6B3",
    borderRadius: 16,
    padding: 18,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  form: { width: "100%" },
  inputGroup: { marginBottom: 16 },

  label: { fontSize: 13, fontWeight: "600", color: "#08090aff", marginBottom: 8 },
  labelRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },

  hint: { fontSize: 12, color: "#000000ff" },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
  },
  leftIcon: { marginLeft: 12 },

  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 16,
    color: "#111827",
  },
  eyeIcon: { position: "absolute", right: 12 },

  inputError: { borderColor: "#dc2626" },
  fieldError: { color: "#dc2626", fontSize: 12, marginTop: 6 },

  
  primaryButton: {
    backgroundColor: "#111827",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  primaryButtonDisabled: { backgroundColor: "#6A3B18" },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  loginError: { color: "#dc2626", fontSize: 14, marginTop: 10, textAlign: "center" },

  backToLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 18,
  },
  backToLoginText: { color: "#111827", fontSize: 14, fontWeight: "600" },

  footerNote: { textAlign: "center", marginTop: 18, color: "#6A3B18", fontSize: 12 },
});