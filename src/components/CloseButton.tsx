import { View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type CloseButtonProps = {
  onClose: () => void;
};
const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonWrapper}
        activeOpacity={0.8}
        onPress={onClose}
      >
        <MaterialCommunityIcons name="close" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  buttonWrapper: {
    padding: 2,
    backgroundColor: '#417043',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 3,
    borderRadius: 6,
    width: 35,
    height: 35,
    alignItems: 'center',
  },
});

export default CloseButton;
