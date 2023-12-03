import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Container from '../../components/Container';
import BurgerButton from '../../components/BurgerButton';
import DefaultText from '../../components/DefaultText';

const Main = () => {
  return (
    <Container>
      <BurgerButton />
      <View style={[style.itemContainer]}>
        <View style={[style.cartContainer]}>
          <Image source={require('../../../assets/images/apple-juice.png')} />
          <View>
            <DefaultText title="Apple juice" styles={{ color: '#000' }} />
            <DefaultText title="Price: $5.00" styles={{ color: '#000' }} />
          </View>
          <TouchableOpacity
            style={[style.cartButtonContainer]}
            activeOpacity={0.9}
          >
            <Text style={[style.cartButton]}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
const style = StyleSheet.create({
  itemContainer: {
    marginTop: 30,
    paddingVertical: 26,
    paddingHorizontal: 20,
    backgroundColor: '#609657',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 6,
    borderLeftWidth: 4,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cartContainer: {
    backgroundColor: '#fff',
    width: 140,
    padding: 6,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  cartButtonContainer: {
    backgroundColor: '#417043',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
  },
  cartButton: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',

    paddingHorizontal: 34,
    paddingVertical: 6,
  },
});
export default Main;
