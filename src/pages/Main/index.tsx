import { View, StyleSheet, Text } from 'react-native';
import { encode as btoa } from 'base-64';
import Container from '../../components/Container';
import BurgerButton from '../../components/BurgerButton';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import { TCatalog } from 'src/types/catalogs';
import { useGetCatalogListQuery } from '../../services/catalogs';
import { Buffer } from 'buffer';

const Main = () => {
  const { data: catalogs } = useGetCatalogListQuery();

  return (
    <Container>
      <BurgerButton />
      <View style={[style.itemContainer]}>
        {catalogs?.length > 0 ? (
          catalogs.map((catalog: TCatalog) => {
            const img = Buffer.from(catalog?.image?.data?.data || [], 'binary');
            console.log(`data:${catalog?.image?.contentType};base64,${img}`);
            return (
              <Card
                title={catalog.title}
                subtitle={`${catalog.price.toFixed(2)}$`}
                key={catalog._id}
                image={`data:${catalog?.image?.contentType};base64,${img}`}
              />
            );
          })
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
