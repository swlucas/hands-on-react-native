import React from 'react'

import {Container, TextInput, Text} from './styles'

interface InputProps{
  value: (text:string) => void
  recebendoAlgo?:string;
  
  inputTypes?:any;
}

const Input = ({value, recebendoAlgo, inputTypes}: InputProps) => {
  
  const handleChangeText = (text:string) => {
    value(text);
  }
  return (
    <>
    <Container >
      <TextInput {...inputTypes} onChangeText={handleChangeText} />
    </Container>
    <Text>{recebendoAlgo}</Text>
    </>
  )
}

export default Input

/*
*Stateless component => BURRO
*StateFull component => Inteligente
*/
