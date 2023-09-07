import React from 'react';
import { SafeAreaView, View, FlatList, Text, ScrollView,  } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from './MenuPageStyles';


const YEMEK = [  // geçici data burada
{
  id: 1,
  name: "Tavukburger menü",
  price: "50",
  ingredients: "tavukburger, marul, domates, turşu, ketçap, mayonez",
  drinks: "Kola",
  snack: "patates kızartması",
  imageUrl: "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
},
{
  id: 2,
  name: "Cheeseburger menü",
  price: "55",
  ingredients: "et burger, peynir, marul, domates, soğan, ketçap, hardal",
  drinks: "Ayran",
  snack: "soğan halkası",
  imageUrl: "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
},
{
  id: 3,
  name: "Veganburger menü",
  price: "45",
  ingredients: "vegan burger, yeşillikler, avokado, soğan, vegan mayonez",
  drinks: "Su",
  snack: "patates kızartması",
  imageUrl: "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
},
{
  id: 4,
  name: "Double Cheeseburger menü",
  price: "60",
  ingredients: "iki et burger, peynir, marul, domates, soğan, ketçap, hardal",
  drinks: "Meyve suyu",
  snack: "mozzarella sticks",
  imageUrl: "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
},
{
  id: 5,
  name: "Bacon Burger menü",
  price: "58",
  ingredients: "et burger, bacon, cheddar peyniri, marul, domates, soğan, mayonez",
  drinks: "Limonata",
  snack: "soğan halkası",
  imageUrl: "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
},
{
  id: 6,
  name: "BBQ Burger menü",
  price: "52",
  ingredients: "et burger, barbekü sos, cheddar peyniri, marul, domates, soğan",
  drinks: "Soda",
  snack: "mısır cipsi",
  imageUrl: "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
},
  ];

const MyCard = ({ item }) => (
  <Card style={{ backgroundColor: '#F0EEEE' }}>
    <Card.Title style={styles.my_card_text_c}
      title={item.name}
      subtitle={`Fiyat: ${item.price} TL`}
    />
    <Card.Content>
      <Text>İçerik;</Text>
      <Text variant="bodyMedium">{item.ingredients}</Text>
      <Text>{item.drinks}</Text>
      <Text>{item.snack}</Text>
    </Card.Content>
    
    <Card.Cover source={{ uri: item.imageUrl }} style={{marginHorizontal:5, marginVertical:3}}/>
    <Card.Actions>
      <Button buttonColor='red' textColor='white' onPress={() => window.alert('Menüye gitme eklendi')}>Menüye Git</Button>
    </Card.Actions>
  </Card>
);

const MenuPageBestSeller = () => {
  const renderItems = ({ item }) => (
    <View style={{margin:5, padding:5}}>
      <MyCard item={item} />
    </View>
  );

  return (
      <FlatList
        scrollEnabled={true}
        data={YEMEK}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
      />
  );
}

export default MenuPageBestSeller;
