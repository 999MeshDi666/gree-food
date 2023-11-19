import { View, Image, StyleSheet } from 'react-native';

type ImageContainerProps = {
  containerStyles?: { [key: string]: string | number };
  imageStyles?: { [key: string]: string | number };
  img: any;
};
const ImageContainer = ({
  containerStyles,
  imageStyles,
  img,
}: ImageContainerProps) => {
  return (
    <View style={[style.container, containerStyles]}>
      <Image style={[style.image, imageStyles]} source={img} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 26,
    left: -15,
    padding: 40,
    backgroundColor: '#609657',
    borderColor: '#244627',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 4,
    borderTopRightRadius: 42,
    borderBottomRightRadius: 42,
  },
  image: {
    width: 250,
    height: 250,
  },
});
export default ImageContainer;
