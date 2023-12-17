import { View, StyleSheet, Text } from 'react-native';
import Container from '../../components/Container';
import BurgerButton from '../../components/BurgerButton';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { TCatalog } from 'src/types/catalogs';

const Main = () => {
  const [catalogs, setCatalogs] = useState<TCatalog[]>([]);
  useEffect(() => {
    const getCatalogs = async () => {
      try {
        const response = await fetch('http://192.168.1.181:8000/api/catalogs/');
        const json = await response.json();

        if (response.ok) {
          setCatalogs(json);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCatalogs();
  }, []);

  return (
    <Container>
      <BurgerButton />
      <View style={[style.itemContainer]}>
        {catalogs ? (
          catalogs.map((catalog) => (
            <Card
              title={catalog.title}
              subtitle={`${catalog.price.toFixed(2)}$`}
              key={catalog.id}
            />
          ))
        ) : (
          <Text>...Loading</Text>
        )}
      </View>
    </Container>
  );
};
const style = StyleSheet.create({
  itemContainer: {
    marginTop: 30,
    paddingTop: 86,
    paddingBottom: 26,
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
});
export default Main;
