import { View, Modal, StyleSheet, Image } from 'react-native';
import CloseButton from '../../components/CloseButton';
import Button from '../../components/DefaultButton';
import Headline from '../../components/DefaultHeadline';
import Input from '../../components/Input';

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
};
const AuthModal = ({ open, onClose }: AuthModalProps) => {
  return (
    <View style={[style.overlay]}>
      <View></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        style={{ justifyContent: 'flex-end' }}
      >
        <View style={style.modalContainer}>
          <View style={style.logoContainer}>
            <Image source={require('../../../assets/images/modal-image.png')} />
          </View>
          <CloseButton onClose={onClose} />
          <Headline title="Sign in" styles={{ textAlign: 'center' }} />
          <View style={style.inputsContainer}>
            <Input icon="user-alt" placeholder="username" />

            <Input icon="user-lock" placeholder="password" />
          </View>
          <Button
            title="Sign in"
            containerStyles={{ backgroundColor: '#417043' }}
            textStyles={{ color: '#fff' }}
            onPress={() => {}}
          />
        </View>
      </Modal>
    </View>
  );
};
const style = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.6,
  },
  modalContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 24,
    backgroundColor: '#609657',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 4,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  logoContainer: {
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
export default AuthModal;
