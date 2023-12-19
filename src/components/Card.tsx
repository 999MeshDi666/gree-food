import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import DefaultText from '../components/DefaultText';

type CardProps = {
  title: string;
  subtitle: string;
  image?: string;
};
const Card = ({ title, subtitle, image }: CardProps) => {
  return (
    <View style={[style.cardContainer]}>
      <View style={[style.cardImageWrapper]}>
        <Image style={[style.cardImage]} source={{ uri: image }} />
      </View>
      <View style={{ marginTop: 15, marginBottom: 8 }}>
        <DefaultText title={title} styles={style.cardText} />
        <DefaultText title={subtitle} styles={style.cardText} />
      </View>
      <TouchableOpacity style={[style.cardButtonContainer]} activeOpacity={0.9}>
        <Text style={[style.cardButton]}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: 140,
    padding: 6,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  cardText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
  cardImageWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  cardImage: {
    position: 'absolute',
    top: -60,
    left: 12,
  },
  cardButtonContainer: {
    backgroundColor: '#417043',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
  cardButton: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff',
    paddingHorizontal: 34,
    paddingVertical: 6,
  },
});
export default Card;
