import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet,  View } from 'react-native';
import {Text,TextInput,Button, Icon} from 'react-native-paper';
import {useState} from 'react';
import Header from './src/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Provider as PaperProvider} from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { StarshipFeedScreenApi } from '~/screens/StarshipFeedScreenApi';


export default function App() {
  const queryClient = new QueryClient()
  const { isLoading, isError, data, error } = useQuery({ queryKey: ["starships"], queryFn: fecthStarshipsData} );
  async function fecthStarshipsData() {
    try{
      const response = await fetch(`https://swapi.py4e.com/api/starships/`);
      const json = await response.json();
      return json;

    }catch(error){
      throw new Error("Something bad happened with the api…");
    }
  }
    
  // function useStarships() {
  //   return  useQuery({ queryKey: ["starships"], queryFn: fecthStarshipsData} );
    
  // }

  
  return ( 
   
   
   <QueryClientProvider client={queryClient}> 
   <PaperProvider>
    {/*  <LoginScreen/> */}
    {/* <StarshipFeedScreen/>  */}
    {/* <StarshipFeedScreenApi/> */}
    {/*  <TermsScreen/> */ }
   
    {isLoading && <Icon source="camera" size={20}></Icon>}
    {isError && <span className='text-red'>{error ? error.message : error}</span>}
    {!isLoading && !isError && data && !data.length && <span className='text-red-400'>Liste vide</span>}
    {/* {data && data.length > 0 && <FlatList
        data={data.results}
        renderItem={({item}) => <Item item={data.results.name} /> }
        keyExtractor={item => item.name} >/*/}
        
      
   </PaperProvider>
   </QueryClientProvider>
  );

 
}



