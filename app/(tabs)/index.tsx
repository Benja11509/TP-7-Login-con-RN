import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
   Image,
} from "react-native";

import { styles } from "../../styles/LoginStyles";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const USER = "simon@galaxies.dev";
  const PASS = "password123";

  
  const handleLogin = () => {
    if (email === USER && password === PASS) {
      setMessage("¡Ingreso exitoso! Bienvenido");
      setSuccess(true);
    } else {
      setMessage(
        "Usuario o contraseña incorrectos, vuelva a intentar"
      );
      setSuccess(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
  <Text style={styles.headerText}>
  Login App (Liberman, Liberman)
</Text>
</View>
<Image
         source={require("../../images/cocacola.png")}
        style={styles.logo}
        />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="simon@galaxies.dev"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="********"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            INGRESAR
          </Text>
        </TouchableOpacity>
         
        {message !== "" && (
          <Text
            style={[
              styles.message,
              success ? styles.success : styles.error,
            ]}
          >
            {message}
          </Text>
        )}

        <Text style={styles.link}>
          ¿Olvidaste la clave?
        </Text>

        <Text style={styles.link}>
          Crear Cuenta
        </Text>
      </View>
    </SafeAreaView>
  );
}