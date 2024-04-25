import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StyleSheet, StatusBar, View, Text, ScrollView, FlatList, Image } from "react-native";
import { Icon } from "react-native-paper";
import { useStarships } from "~/hooks/useStarships";

type ItemProps = {item:{name: string ,model: string, crew: string}};
 


const Item = ({item}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.title}>{item.model}</Text>
    <Text style={styles.title}>{item.crew}</Text>
    <Image style={styles.img} source={{uri:`https://picsum.photos/seed/${item.name}/400/200`}}/>
  </View>
);

export const StarshipFeedScreenApi = () => {
    const {isLoading, isError, error, data} = useStarships();

    if (isLoading) {
      return <View style={styles.containerFull}><Icon source="camera" size={20}></Icon></View>;
    }

    if (isError) {
      return <View style={styles.containerFull}><Text style={{color: 'red'}}>{error ? error.message : error}</Text></View>;
    }
  
    if (data.length === 0) {
      return <View style={styles.containerFull}><Text style={{color: 'red'}}>Liste vide</Text></View>;
    }
  
    return (
      <>
        <FlatList
          data={data.results}
          renderItem={({item}) => <Item item={item} /> }
          keyExtractor={item => item.name}  
        />
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
  },
  containerFull: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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