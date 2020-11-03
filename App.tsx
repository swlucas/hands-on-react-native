import React, {useState} from 'react';
import {View} from 'react-native'
import Input from './src/components/Input'

export default function App() {
  const [textInput, setTextInput] = useState<string>()
  const handleInput = (text:string) => {
    setTextInput(text)
  }
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
      <Input value={handleInput} recebendoAlgo={textInput} inputTypes={{placeholder:'Escreva algo', placeholderTextColor:'black'}} />
    </View>
  );
}
