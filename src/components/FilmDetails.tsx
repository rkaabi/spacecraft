import { View, Text } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

type Props = {
  film: string;
};

const FilmDetails = (props: Props) => {
  const film = props.film;

  // 1.  Ajouter une fnction pour extrare le dernier caractere from URL API
  // 2. impoprter use film
  // 3 . const {ispending , is error, data} = userFilms( const point 1)
  return (
    <DataTable.Row>
      <DataTable.Cell>{film}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default FilmDetails;
