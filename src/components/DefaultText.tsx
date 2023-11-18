import { Text, StyleSheet } from 'react-native';

type DefaultTextProps = {
  title: string;
  styles?: { [key: string]: string | number };
};
const DefaultText = ({ title, styles }: DefaultTextProps) => {
  return <Text style={[style.text, styles]}>{title}</Text>;
};
const style = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
});
export default DefaultText;
