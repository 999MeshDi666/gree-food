import { Text, StyleSheet } from 'react-native';

type DefaultHeadlineProps = {
  title: string;
  textStyles?: { [key: string]: string | number };
};
const DefaultHeadline = ({ title, textStyles }: DefaultHeadlineProps) => {
  return (
    <Text numberOfLines={3} style={[style.text, textStyles]}>
      {title}
    </Text>
  );
};
const style = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'Alef-Bold',
    fontSize: 40,
    textTransform: 'uppercase',
  },
});
export default DefaultHeadline;
