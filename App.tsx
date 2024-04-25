import {Provider as PaperProvider} from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StarshipFeedScreenApi } from '~/screens/StarshipFeedScreenApi';


export default function App() {
  const queryClient = new QueryClient()
    
  return ( 
   
   
   <QueryClientProvider client={queryClient}> 
    <PaperProvider>
      {/*  <LoginScreen/> */}
      {/* <StarshipFeedScreen/>  */}
      <StarshipFeedScreenApi/>
      {/*  <TermsScreen/> */ }
    </PaperProvider>
   </QueryClientProvider>
  );

 
}



