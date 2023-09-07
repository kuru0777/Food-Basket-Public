import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { blue500 } from './../../../../node_modules/react-native-paper/lib/module/styles/themes/v2/colors';

const screen_height = (Dimensions.get('window').height) * 2 / 7;
const screen_width = (Dimensions.get('window').width) * 9 / 10;

 function MenuPageStyles() {
   
  return (
    <View>
      <Text>MenuPageStyles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    slider_container: {
        margin:20,
        padding:15,
        justifyContent:'center',
        alignItems: 'center',
        width: screen_width,
        height: screen_height,
        backgroundColor: "red",
        borderRadius: 20
    },
    bestseller_container:{
        margin:20,
        padding:15,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: "purple",
        borderRadius: 5,
        flexDirection: "column",
    },
    main_screen:{
        padding: 10,
        margin: 10,

    },
    text_style: {
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        textDecorationStyle:'dotted',
        fontSize: 30,
        fontWeight: 'bold'

    },
    carousel:{
      flex: 1
    },
    menu_card_container:{
      backgroundColor: '#D9D5D5',
      padding: 3,
      margin: 5
    },
    my_card_text_c:{
      color:'white',
    }
});

export default styles;