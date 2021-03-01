import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>RN Social App</Text>
      <FormInput
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        onChangeText={(email) => setEmail(email)}
      />

      <FormInput
        placeholderText="Password"
        iconType="lock"
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => alert('Sign In Clicked')}
      />

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign In with Facebook"
        iconType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign In with Google"
        iconType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.navButtonText}>I don't have an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
