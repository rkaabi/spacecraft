import { Button, Chip, DataTable, List, MD3Colors } from "react-native-paper";
import { Image, StyleSheet, Text, View } from "react-native";
import FilmDetails from "~/components/FilmDetails";

export const StarshipFeedScreenDetail = (props: any) => {
  //    console.log(props.route.params.item)
  const name = props.route.params.item.name;
  const {
    crew,
    model,
    manufacturer,
    passengers,
    hyperdrive_rating,
    max_atmosphering_speed,
    films,
  } = props.route.params.item;
  return (
    <View>
      <Image
        style={styles.img}
        source={{ uri: `https://picsum.photos/seed/${name}/400/200` }}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{manufacturer}</Text>
      <Button>StarshipFeedScreenDetail {crew} </Button>
      <Chip icon="information">{passengers}</Chip>

      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title={hyperdrive_rating}
          left={() => <List.Icon icon="star" />}
        />
        <List.Item
          title={max_atmosphering_speed}
          left={() => (
            <List.Icon
              color={MD3Colors.tertiary70}
              icon="atom"
            />
          )}
        />
      </List.Section>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Films</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      {films.slice().map((filmunit: string) => (
        <FilmDetails
          film={filmunit}
          key={filmunit}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
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
    height: 250,
    width: "auto",
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
  subtitle: {
    fontSize: 25,
  },
});
