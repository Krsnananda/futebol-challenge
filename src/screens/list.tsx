import React, {useEffect, useState} from "react";
import {
  ButtonText, 
  Container, 
  EmptyList, 
  ItemList, 
  List, 
  Logo, 
  Player, 
  RegisterButton 
} from "../styles";
import tactical from './../../assets/tactical.png';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

export default function ListScreen() {
  const {navigate} = useNavigation()
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    getUsers().then(res => {
       setUsersData(res)
    }).catch(error => console.log(error)) 
        
  }, [])

  const getUsers = async () => {
    let keys: any = []
    let values: any
    
    try {
      keys = await AsyncStorage.getAllKeys()
      
      try {
        values = await AsyncStorage.multiGet(keys)
      } catch (error) {
        console.log(error)
      }
      
    } catch (error) {
      console.log(error)
    }
    return values  
  }

  const parseValues = (values: Array<any>) => {
    const result = values.map((item: {name: ''}, index: number) => {
      return (
        <ItemList key={index}>
          <Player>{JSON.parse(item[1]).name}</Player>
        </ItemList>
      )
    })
    return result
  }

  return(
    <Container contentContainerStyle={{alignItems: 'center'}}>
      {usersData.length > 0 ? (
        <List>
          {parseValues(usersData)}
        </List>
      ) : (
        <>
          <EmptyList>Ainda não há participantes cadastrados</EmptyList>
          <Logo source={tactical} />
        </>
      )}
      
      <RegisterButton onPress={() => {
        navigate('Register'  as never, {} as never)
      }}>
        <ButtonText>Registrar</ButtonText>
      </RegisterButton>
    </Container>
  )
}