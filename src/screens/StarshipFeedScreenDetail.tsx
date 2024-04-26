import React from 'react'
import { Button } from 'react-native-paper'



export const StarshipFeedScreenDetail = (props) => {
//    console.log(props.route.params.item)
  const name = props.route.params.item.name;
  const {crew, model} = props.route.params.item;
    return (
    
     <Button>StarshipFeedScreenDetail {crew} </Button>
  )
}

