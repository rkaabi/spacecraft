import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Spaceship } from "~/api/api-types";
import { Routes } from "~/navigation/Routes";

type CardProps = {
  item: Spaceship;
};
interface NavigationDetailsProps {
  navigate: (screen: string, params: { item: Spaceship }) => void;
}

export function Card({ item }: CardProps) {
  const navigation = useNavigation<NavigationDetailsProps>();
  function navigateToStarshipfeedDetail(item: Spaceship) {
    console.log("🚀 routes ", Routes);
    navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { item });
  }

  return (
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
}

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
