import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type DefaultButtonProps = {
  title: string;
  onPress: () => void;
  containerStyles?: { [key: string]: string | number };
  textStyles?: { [key: string]: string | number };
};
const DefaultButton = ({
  containerStyles,
  textStyles,
  title,
  onPress,
}: DefaultButtonProps) => {
  return (
    <TouchableOpacity
      style={[style.container, containerStyles]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={[style.title, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 19,
    backgroundColor: '#E9E9E9',
    borderColor: '#292929',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 4,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default DefaultButton;
