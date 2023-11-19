import { View, TextInput, StyleSheet, InputModeOptions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

type InputProps = {
  icon: any;
  placeholder: string;
  inputMode?: InputModeOptions;
  styles?: { [key: string]: string | number };
};
const Input = ({
  icon,
  placeholder,
  inputMode = 'text',
  styles,
}: InputProps) => {
  return (
    <View style={[style.container, styles]}>
      <FontAwesome5 name={icon} size={24} color="#fff" />
      <TextInput
        placeholder={placeholder}
        style={[style.input]}
        placeholderTextColor={style.input.color}
        inputMode={inputMode}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
    backgroundColor: '#417043',
    padding: 16,
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    paddingHorizontal: 16,
    width: '100%',
  },
});
export default Input;
