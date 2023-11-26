import { Text, StyleSheet } from 'react-native';

type DefaultHeadlineProps = {
  title: string;
  styles?: { [key: string]: string | number };
};
const DefaultHeadline = ({ title, styles }: DefaultHeadlineProps) => {
  return (
    <Text numberOfLines={3} style={[style.text, styles]}>
      {title}
    </Text>
  );
};
const style = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'OpenSans-Bold',
    fontSize: 32,
    textTransform: 'uppercase',
  },
});
export default DefaultHeadline;
