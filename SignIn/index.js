import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import * as Facebook from 'expo-facebook';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import { AuthContext } from '../context';

import { } from './styles';

import firebase from 'firebase';


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))



  }

  const facebookSignIn = async () => {
    await Facebook.initializeAsync('680001739462648', 'firebase-login');
    const { type, token } = await Facebook.logInWithReadPermissionsAsync
      ('680001739462648', { permissions: ['public_profile'] })
   // console.log(token);
    if (type == 'success') {
      const creds = firebase.auth.FacebookAuthProvider.credential(token)
      firebase.auth().signInWithCredential(creds)
        .then(() => { signIn() })
        .catch((error) => console.log(error));
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Acessar" onPress={() => handleSignIn()} />
      <Button title="Acessar Com o Facebbok" onPress={() => facebookSignIn()} />
      <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  input_auth: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    margin: 10,
    marginTop: 0,
    padding: 4
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  }
});

