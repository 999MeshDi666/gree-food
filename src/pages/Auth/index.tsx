import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/DefaultButton';
import Headline from '../../components/DefaultHeadline';
import ImageContainer from '../../components/ImageContainer';

const Auth = ({ navigation }: any) => {
  return (
    <Container>
      <Headline title="Login or create an account" styles={{ marginTop: 25 }} />
      <ImageContainer img={require('../../../assets/images/auth-image.png')} />
      <View style={style.buttonContainer}>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
          containerStyles={{ marginBottom: 18 }}
        />
        <Button
          title="Create an account"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </Container>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    top: '10%',
  },
});
export default Auth;
