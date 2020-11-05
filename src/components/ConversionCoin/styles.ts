import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export const Container = styled.View`
  flex:1;
  padding-horizontal:30px;
  align-items:center;
  justify-content:center;
`;

export const Output = styled.View`
  background-color:#ffccaa;
  width:100%;
  height:40px;
  justify-content:center;
  align-items:center;
  border-radius:8px;
`

export const Text = styled.Text``

export const TouchableOpacity = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  margin-vertical:50px;
`

export const ConversionIcon = styled(Icon).attrs({
  name:'twitter-retweet',
  size:60
})`
`