import React from "react";
import { StyleSheet, StatusBar, View, Text, ScrollView, FlatList, Image } from "react-native";

 import { default as data } from "../api/data.json";


export const StarshipFeedScreen = () => {

    
    type ItemProps = {item:{name: string ,model: string, crew: string}};
    
    const Item = ({item}: ItemProps) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.model}</Text>
          <Text style={styles.title}>{item.crew}</Text>
          <Image style={styles.img} source={{uri:`https://picsum.photos/seed/${item.name}/400/200`}}/>
        </View>
      );
  
    return (
        <FlatList
        data={data.results}
        renderItem={({item}) => <Item item={item} /> }
        keyExtractor={item => item.name}
        
      />
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  img: {
    width: 100,
    height: 100
  },
});