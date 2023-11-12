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
          textStyles={{ width: 200, marginBottom: 6 }}
        />
        <Text title="Made by hand, from scratch, with love. Green food." />
      </View>
      <Button
        title="Get started"
        containerStyles={{ marginTop: 32 }}
        handlePress={() => navigation.navigate('Main')}
      />
    </Container>
  );
};
const style = StyleSheet.create({});
export default Intro;
