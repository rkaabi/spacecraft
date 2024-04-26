import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Icon } from "react-native-paper";

import { useStarships } from "~/hooks/useStarships";
import { Routes } from "~/navigation/Routes";

export const StarshipFeedScreenApi = (props) => {
  const { isLoading, isError, error, data } = useStarships();

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
      <Button onPress={() => navigateToStarshipfeedDetail(item)}>Détail</Button>
    </View>
  );

  function navigateToStarshipfeedDetail(item: ItemProps) {
    props.navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { item });
  }

  if (isLoading) {
    return (
      <View style={styles.containerFull}>
        <Icon
          source="camera"
          size={20}
        ></Icon>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.containerFull}>
        <Text style={{ color: "red" }}>{error ? error.message : error}</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.containerFull}>
        <Text style={{ color: "red" }}>Liste vide</Text>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={data.results}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.name}
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
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  img: {
    height: 100,
    width: 100,
  },
  item: {
    backgroundColor: "#f9c2ff",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
