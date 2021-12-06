import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.ScrollView`
  flex: 1;
  height: ${Dimensions.get('screen').height}px;
`
export const ContainerRegister = styled.ScrollView`
  flex: 1;
  margin-top: 50px;
  padding: 0 20px;
  height: ${Dimensions.get('screen').height}px;
`
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 15%;
  margin-bottom: 65%;
` 
export const EmptyList = styled.Text`
  font-size: 18px;
  margin: 100px 0;
  font-weight: bold;
`
export const RegisterButton = styled.TouchableOpacity`
  width: 80%;
  border-radius: 50px;
  bottom: 0;
  height: 60px;
  position: absolute;
  background-color: #3a9e9c;
  justify-content: center;
`
export const ButtonText = styled.Text`
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;  
`
export const ReserveWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`
export const ReserveText = styled.Text`
  font-size: 16px;
  align-self: center;
  font-weight: bold;
  color: #878682;
  margin: 0 0 2px 10px;
`
export const ButtonWrapper = styled.View`
  margin-top: 45%;
  align-items: center;
`