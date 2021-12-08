import React, {useState} from "react";
import { Text } from "react-native";
import { Input } from 'react-native-elements' 
import { ButtonText, ButtonWrapper, ContainerRegister, RegisterButton, ReserveText, ReserveWrapper } from "../styles";
import { Picker } from "@react-native-picker/picker";
import {dateMask, cpfMask} from "../utils/masks"

const RegisterScreen:React.FC = () =>  {
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [position, setPosition] = useState('')
  const [selected, setSelected] = useState('')

  return(
    <ContainerRegister>
      <Input
        label='Nome'
        value={name}
        onChangeText={(text: string) => setName(text)}
        placeholder='Nome completo (obrigatório)*'
        errorMessage={''}
      />
      <Input
        label='Data de nascimento'
        value={date}
        keyboardType='number-pad'
        maxLength={10}
        onChangeText={(text: string) => {
          let value: any = dateMask(text)
          setDate(value)
        }}
        placeholder='dd/mm/yyyy (obrigatório)*'
        errorMessage={''}
      />
      <Input
        label='CPF'
        value={cpf}
        keyboardType='number-pad'
        onChangeText={(text: string) => {
          let value = cpfMask(text)
          setCpf(value)
        }}
        placeholder='999.999.999-99 (obrigatório)*'
        errorMessage={''}
      />
      <Input
        label='Posição'
        value={position}
        onChangeText={(text: string) => setPosition(text)}
        placeholder='Ex: Goleiro, lateral, etc.'
        errorMessage={''}
      />
      <ReserveWrapper>
        <ReserveText>Reserva</ReserveText>
      </ReserveWrapper>
      <Picker
      style={{marginLeft: 5}}
        selectedValue={selected}
        onValueChange={(item) => setSelected(item)}
        >
        <Picker.Item color={'#878682'} label='SIM' value='SIM'/>
        <Picker.Item color={'#878682'} label='NÃO' value='NÃO'/>
      </Picker>
      <ButtonWrapper>
        <RegisterButton onPress={() => {
          // navigate('Register'  as never, {} as never)
        }}>
          <ButtonText>Salvar</ButtonText>
        </RegisterButton>
      </ButtonWrapper>
    </ContainerRegister>
  )
}

export default RegisterScreen