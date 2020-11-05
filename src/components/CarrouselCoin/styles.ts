import styled from 'styled-components/native';
import IconBRL from 'react-native-vector-icons/MaterialCommunityIcons'

export const Container = styled.View`
  width:100%;
  height:100px;
`;

export const ScrollView = styled.ScrollView.attrs({
  horizontal:true,
  contentContainerStyle:{
    padding:20,
    alignItems:'center'
  }
})`
`

export const Coin = styled.View`
  min-width:100px;
  height:60px;
  background-color:#4F93FA;
  margin:10px;
  border-radius:8px;
  padding-horizontal:20px;
  justify-content:space-evenly;
  align-items:center;
`
export const Name = styled.Text`
  font-size:18px;
  font-weight:800;
  color:white;
`

export const DiaryVariation = styled.Text`
  font-size:15px;
  font-weight:800;
  color:#66FF37;
  /* #DB2C19 */
`

export const ContainerIcon = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:baseline;
`

export const Icon = styled(IconBRL).attrs({
  name:"currency-brl",
  size:20,
})`
  margin-right:3px;
  color:black;
`

export const Value = styled.Text`
  font-size:18px;
  font-weight:600;
  color:white;
`


