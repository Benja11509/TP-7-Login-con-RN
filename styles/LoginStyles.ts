import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

header: {
  backgroundColor: "#7B2CBF",
  paddingVertical: 18,
  alignItems: "center",
},

headerText: {
  color: "#FFFFFF",
  fontSize: 18,
  fontWeight: "bold",
},
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#F8F8F8",
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#7B2CBF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  message: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  success: {
    color: "green",
  },

  error: {
    color: "red",
  },

link: {
  marginTop: 15,
  color: "#555",
  fontSize: 15,
},

logo: {
  width: 140,
  height: 80,
  resizeMode: "contain",
  alignSelf: "flex-start",
  marginLeft: 20,
  marginTop: 120,
},
});