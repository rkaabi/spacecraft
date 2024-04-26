import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import { default as data } from "../api/data.json";

export const StarshipFeedScreen = () => {
  type ItemProps = { item: { name: string; model: string; crew: string } };

  const Item = ({ item }: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.model}</Text>
      <Text style={styles.title}>{item.crew}</Text>
      <Image
        style={styles.img}
        source={{ uri: `https://picsum.photos/seed/${item.name}/400/200` }}
      />
    </View>
  );

  return (
    <FlatList
      data={data.results}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.name}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0 // only for Android to avoid status bar overlap
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  img: {
    height: 100,
    width: 100
  },
  item: {
    backgroundColor: "#f9c2ff",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20
  },
  title: {
    fontSize: 32
  }
});
