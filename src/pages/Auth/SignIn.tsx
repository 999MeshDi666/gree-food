import { View, Modal, StyleSheet, Image } from 'react-native';
import CloseButton from '../../components/CloseButton';
import Button from '../../components/DefaultButton';
import Headline from '../../components/DefaultHeadline';
import Input from '../../components/Input';
import { useState } from 'react';

const SignIn = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[style.overlay]}>
      <View style={style.modalContainer}>
        <View style={style.logoContainer}>
          <View style={style.logoWrapper}>
            <Image source={require('../../../assets/images/modal-image.png')} />
          </View>
        </View>
        <CloseButton
          onClose={() => {
            navigation.goBack();
          }}
        />
        <Headline title="Sign in" styles={{ textAlign: 'center' }} />
        <View style={style.inputsContainer}>
          <Input
            icon="user-alt"
            placeholder="username"
            value={username}
            onChange={(value) => {
              setUsername(value);
            }}
          />
          <Input
            icon="user-lock"
            placeholder="password"
            secureEntry={true}
            value={password}
            onChange={(value) => {
              setPassword(value);
            }}
          />
        </View>
        <Button
          title="Sign in"
          containerStyles={{ backgroundColor: '#417043' }}
          textStyles={{ color: '#fff' }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  overlay: {
    backgroundColor: '#00000090',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    width: '100%',
    opacity: 1,
    position: 'absolute',
    bottom: 0,
    padding: 15,
    backgroundColor: '#609657',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 4,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logoContainer: {
    position: 'absolute',
    top: -70,
    left: 140,
  },
  logoWrapper: {
    width: 120,
    padding: 14,
    backgroundColor: '#609657',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 100,
  },
  inputsContainer: {
    marginTop: 26,
  },
});
export default SignIn;
