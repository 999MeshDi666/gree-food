import { View, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/DefaultButton';
import Text from '../../components/DefaultText';
import Headline from '../../components/DefaultHeadline';
import ImageContainer from '../../components/ImageContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Intro = ({ navigation }: any) => {
  return (
    <Container>
      <ImageContainer img={require('../../../assets/images/intro-image.png')} />
      <View style={{ marginTop: 16 }}>
        <Headline
          title={`Quick, Fresh & Delicious`}
          styles={{ width: 200, marginBottom: 6, fontSize: 40 }}
        />
        <Text title="Made by hand, from scratch, with love. Green food." />
      </View>
      <View style={style.buttonContainer}>
        <Button
          title="Get started"
          containerStyles={{ marginTop: 32 }}
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    </Container>
  );
};
const style = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    top: '10%',
  },
});
export default Intro;
