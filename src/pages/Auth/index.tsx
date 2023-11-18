import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/DefaultButton';
import Headline from '../../components/DefaultHeadline';
import ImageContainer from '../../components/ImageContainer';
import Modal from './Modal';

const Auth = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Headline
          title="Sign in or create an account"
          styles={{ marginTop: 25 }}
        />
        <ImageContainer
          img={require('../../../assets/images/auth-image.png')}
        />
        <View style={style.buttonContainer}>
          <Button
            title="Sign in"
            onPress={() => {
              setOpen(!open);
            }}
            containerStyles={{ marginBottom: 18 }}
          />
          <Button title="Create an account" onPress={() => {}} />
        </View>
      </Container>
      {open && (
        <Modal
          open={open}
          onClose={() => {
            setOpen(!open);
          }}
        />
      )}
    </>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
});
export default Auth;
