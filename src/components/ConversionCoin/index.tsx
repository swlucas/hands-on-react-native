import React, {useState} from 'react';

import Input from '../Input'
import { Container, Output, ConversionIcon, TouchableOpacity, Text } from './styles';

const ConversionCoin = () => {
  const [value, setValue] = useState()

  const handleConversionValue = (value:string) => {
    
    const real = Intl.NumberFormat('pt-BR').format(parseFloat(value))
    const dolar = parseFloat(5.6612)
    setValue(parseFloat(real * dolar))    
  }


  return(
  <Container>
    <Input autoFocus keyboardType="decimal-pad" value={(number) => handleConversionValue(number)} />
    <TouchableOpacity>
      <ConversionIcon/>
    </TouchableOpacity>
    <Output>
    <Text>{!value ? 'Não há valores' : value}</Text>
    </Output>
  </Container>);
}

export default ConversionCoin;