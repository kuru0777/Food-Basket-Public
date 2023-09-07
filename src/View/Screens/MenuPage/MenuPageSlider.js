/* import  React from 'react';
import { Dimensions, Text, View, FlatList} from 'react-native';
import styles from './MenuPageStyles';
import { ENTRIES1 } from './Data';
*/
/* function Index() {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            
        </View>
    );
}

export default Index;
*/ 


/*
const carousel_slider=[
    {
        "id": 1,
        "name": "Reklam 1"
    },
    {
        "id": 2,
        "name": "Reklam 2"
    },
    {
        "id": 3,
        "name": "Reklam 3"
    },
];
renderItems = ({ item }) => <View style={styles.slider_container}>
    <Text>{item.name}</Text>
</View>


const MenuPageCarousel = () => {
    return (
      <FlatList
        horizontal
        data={carousel_slider}
        renderItem={renderItems}
      />
    );
  }
  
export default MenuPageCarousel;
*/

import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';

const carouselData = [
  {
    "id": 1,
    "name": "Reklam 1",
    "url": "https://i.nefisyemektarifleri.com/2020/08/11/ev-yapimi-gurme-hamburger-ekmekkofte-tarifiyle-1.jpg"
  },
  {
    "id": 2,
    "name": "Reklam 2",
    "url": "https://www.shutterstock.com/shutterstock/photos/1399168025/display_1500/stock-photo--hamburger-and-fried-potatoes-on-a-wooden-table-1399168025.jpg"
  },
  {
    "id": 3,
    "name": "Reklam 3",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwV72x-USMsOs_9maotYoHReA6W4mRYOryDg&usqp=CAU"
  },
];
const { width } = Dimensions.get('window');

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    scrollViewRef.current.scrollTo({ x: index * width, y: 0, animated: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % carouselData.length;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {carouselData.map((item, index) => (
          <View
            key={item.id}
            style={{ width: 400, height: 200, alignItems: 'center', justifyContent: 'center', padding:5, margin:5 }}
          >
            <Image source={{ uri: item.url }} style={{ width: 400, height: 200, borderRadius:5 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Carousel;
