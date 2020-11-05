import React, {useEffect, useState} from 'react'
import API from '../../services'


import {Container, ScrollView, Coin, Name,DiaryVariation,Value, ContainerIcon,Icon} from './styles'

interface CoinType {
  code:string;
  codein:string;
  name:string;
  high:number;
  low:number;
  varBid:number;
  pctChange:number;
  bid:number;
  ask:number;
  timestamp: Date;
  create_date: Date;
}

const CarrouselCoin = () => {
  const [coins, setCoins] = useState<Array<CoinType>>([])

  useEffect(() => {
    if(!coins.length) handleGetCoins()
    else setInterval(() => handleGetCoins(),180000)
  },[])

  const handleGetCoins = async () => {
    const response = await API.get('/json/all')
    
    setCoins(Object.keys(response.data).map((key) => response.data[key]))
  }

  const handleColorPCTChange = (value:number):string => {
    if(value < 0 ) return '#DB2C19'
    if(value > 0 ) return '#66FF37'
    return 'gray'
  }

  const handleValue = (value:number):string => {
    return Intl.NumberFormat('pt-BR',{maximumSignificantDigits: 3}).format(value)
  }

  return (<Container>
    <ScrollView >
      {coins.map(({name, pctChange,bid }) => (
      <Coin key={name}>
        <Name>{name}</Name>
        <DiaryVariation style={{color:handleColorPCTChange(pctChange)}}>{pctChange}</DiaryVariation>
        <ContainerIcon>
          <Icon />
          <Value>{handleValue(bid)}</Value>
        </ContainerIcon>
      </Coin>))}
    </ScrollView>
  </Container>)
}

 


export default CarrouselCoin