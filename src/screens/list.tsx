import React from "react";
import { Text } from "react-native";
import { Container, EmptyList, Logo } from "../styles";
import tactical from './../../assets/tactical.png';

export default function ListScreen() {
  return(
    <Container>
      <EmptyList>Ainda não há participantes cadastrados</EmptyList>
      <Logo source={tactical} />
    </Container>
  )
}