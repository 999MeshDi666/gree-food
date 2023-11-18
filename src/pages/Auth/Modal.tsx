import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        style={{ justifyContent: 'flex-end' }}
      >
        <View style={style.modalContainer}>
          <CloseButton onClose={onClose} />
          <Headline title="Sign in" styles={{ textAlign: 'center' }} />
          <View style={style.inputsContainer}>
            <Input
              icon="user-alt"
              placeholder="username"
              styles={{ marginBottom: 26 }}
            />

            <Input icon="user-lock" placeholder="password" />
          </View>
          <View style={style.buttonContainer}>
            <Button
              title="Sign in"
              containerStyles={{ backgroundColor: '#417043' }}
              textStyles={{ color: '#fff' }}
              onPress={() => {}}
            />
          </View>
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
    padding: 24,
    top: '50%',
    flex: 0.5,
    backgroundColor: '#609657',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 4,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  inputsContainer: {
    marginTop: 26,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default AuthModal;
