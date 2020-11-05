import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native'
import api from './services';


export default function App() {
  const [escolas, setEscolas] = useState([]) 
  useEffect(() => {handleGetTransport()},[]) 

  const handleGetTransport = async () => {
    const response = await api.get('/escolas',{headers:{Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkyLnNlYy5iYS5nb3YuYnIiLCJleHAiOjE2MDQ4Njc1MzksImp0aSI6IjEzYWM2MmNkZTliMzQzOGE1MTk1NzY2MTgzNzZkMGNhIiwidXNlciI6eyJpZCI6NDA2OCwidXNlcm5hbWUiOiJ3aWx0b25AZ21haWwuY29tIiwibm9tZSI6IldJTFRPTiBSRUlTIERPUyBTQU5UT1MiLCJpZFBlc3NvYSI6MTc5NTU2OCwiaW1hZ2VtIjoidXBsb2FkXC9mb3Rvc1wvNWU5OWRhYWE3ZjYzNy5qcGciLCJjb2RTZWMiOjExMDc5ODZ9LCJzY29wZSI6eyJhcHAiOjF9fQ.YJch3do7Pls5HQ5lzKAvoNJZ4TJrJUoySgsffWyUIr0'}})
    // const {} = response.data
    const {escolas} = response.data._embedded
    setEscolas(escolas)
  }

  const escolaComponent = (escola) => (<View style={{width:'90%', height:100, margin:10, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
  <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>{escola.id}</Text>
  <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>{escola.nome}</Text>
  </View>)
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {escolas.map((escola) => escolaComponent(escola))}
      </ScrollView>
      {/* <FlatList 
        data={escolas}
        renderItem={escolaComponent} 
        keyExtractor={item => item.id}
        /> */}
        {/* {escolas.map((escola) => escolaComponent(escola))} */}
    </SafeAreaView>
  );
}
