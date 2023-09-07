import React from 'react';
import { Card } from 'react-native-paper';
import styles from './MenuPageStyles';
import { View, Image} from 'react-native';
const carouselData = [
    {
      "id": 1,
      "name": "Reklam 1",
      "desc": "Doyuran İkili",
      "url": "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
    },
    {
      "id": 2,
      "name": "Reklam 2",
      "desc": "Efsane Beşli",
      "url": "https://www.shutterstock.com/shutterstock/photos/1399168025/display_1500/stock-photo--hamburger-and-fried-potatoes-on-a-wooden-table-1399168025.jpg"
    },
    {
      "id": 3,
      "name": "Reklam 3",
      "desc": "Füme Efsanesi",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwV72x-USMsOs_9maotYoHReA6W4mRYOryDg&usqp=CAU"
    },
    {
        "id": 4,
        "name": "Reklam 4",
        "desc": "Ekonomikings",
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwV72x-USMsOs_9maotYoHReA6W4mRYOryDg&usqp=CAU"
      },
  ];
 const MenuCard = () =>{
    return(
        
          <View style={{margin:5,}}>
        {carouselData.map(item => (
            <Card key={item.id} style={styles.menu_card_container}>
              <Card.Title title={item.name} subtitle={item.desc} />
             
            </Card>
          ))}

          </View>
          
    );
}


export default MenuCard;