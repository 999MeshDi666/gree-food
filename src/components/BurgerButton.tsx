import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
const BurgerButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={[style.burgerButton]}>
        <View style={style.burgerButtonLine} />
        <View style={[style.burgerButtonLine, style.burgerButtonLineMiddle]} />
        <View style={style.burgerButtonLine} />
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  burgerButton: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  burgerButtonLine: {
    backgroundColor: '#fff',
    width: 22,
    height: 5,
    borderRadius: 50,
  },
  burgerButtonLineMiddle: {
    width: 34,
    marginVertical: 5,
  },
});
export default BurgerButton;
