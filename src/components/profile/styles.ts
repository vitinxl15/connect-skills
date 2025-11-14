import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E9EDF2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 2,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#4A4A4A",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222222",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B6B6B",
  },
 
  
  fieldWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#2E2E2E",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: "#FBFBFD",
  },
  infoText: {
    fontSize: 12,
    color: "#8C8C8C",
    marginBottom: 20,
  },
 

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    backgroundColor: "#FBFBFD",
    paddingRight: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  eyeButton: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
 
  
  selectWrapper: {
    marginBottom: 30,
  },
  selectBox: {
    borderRadius: 10,
    backgroundColor: "#FBFBFD",
    borderColor: "#E0E0E0",
  },
 
  
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
    elevation: 2,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
 

  smallGap: {
    height: 8,
  },
  largeGap: {
    height: 20,
  },
  button: {
    backgroundColor: "#000000ff",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 40,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

});