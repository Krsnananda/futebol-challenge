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
export const List = styled.View`
  margin: 100px 0;
  `
export const ItemList = styled.View`
  flex-direction: row;
  padding: 20px 0 20px 5px;
  width: ${Dimensions.get('screen').width - 100}px;
  border-bottom-width: 1px;
  border-bottom-color: #878682;
`
export const Player = styled.Text`
  font-size: 20px;
  font-weight: bold;
  flex: 1;
`
export const EditIcon = styled.Image`
  width: 30px;
  height: 30px;
  align-self: center;
  margin: 0 10px 0 0;
`
export const CloseIcon = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
  margin: 0 0 0 10px;
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