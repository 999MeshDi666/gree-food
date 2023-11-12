import { Text, StyleSheet, TouchableOpacity } from 'react-native';

type DefaultTextProps = {
  title: string;
  textStyles?: { [key: string]: string | number };
};
const DefaultText = ({ title, textStyles }: DefaultTextProps) => {
  return <Text style={[style.text, textStyles]}>{title}</Text>;
};
const style = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
});
export default DefaultText;
