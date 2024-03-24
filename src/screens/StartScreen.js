import React from 'react'
import Background from '../components/login/Background'
import Logo from '../components/login/Logo'
import Header from '../components/login/Header'
import Paragraph from '../components/login/Paragraph'
import Button from '../components/login/Button'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Quiz App</Header>
      <Paragraph>
      مرحبا بك في برنامج الكوزات
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}