import React from "react";
import { ButtonText, Container, EmptyList, Logo, RegisterButton } from "../styles";
import tactical from './../../assets/tactical.png';
import { useNavigation } from "@react-navigation/native";

export default function ListScreen() {
  const {navigate} = useNavigation()

  return(
    <Container contentContainerStyle={{alignItems: 'center'}}>
      <EmptyList>Ainda não há participantes cadastrados</EmptyList>
      <Logo source={tactical} />
      <RegisterButton onPress={() => {
        navigate('Register'  as never, {} as never)
      }}>
        <ButtonText>Registrar</ButtonText>
      </RegisterButton>
    </Container>
  )
}