import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

import { Card } from "~/components/Card";
import { useStarships } from "~/hooks/useStarships";

export const StarshipFeedScreenApi = (props: any) => {
  const { isLoading, isError, error, data } = useStarships();

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
    <FlatList
      data={data.results}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => item.name}
    />
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
