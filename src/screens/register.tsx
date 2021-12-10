import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native"
import { Text, ToastAndroid } from "react-native";
import { Input } from 'react-native-elements' 
import { ButtonText, ButtonWrapper, ContainerRegister, RegisterButton, ReserveText, ReserveWrapper } from "../styles";
import { Picker } from "@react-native-picker/picker";
/**
 * ========
 * Utils
 * ========
 */
import {dateMask, cpfMask} from "../utils/masks"
import { validateCpf, validateDate } from "../utils/validations"

const RegisterScreen:React.FC = () =>  {
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [position, setPosition] = useState('')
  const [selected, setSelected] = useState('')
  const {navigate} = useNavigation()

  const validateForm = () => {
    return Boolean(date && name && cpf && validateCpf(cpf) && validateDate(date))
  }
  
  const showToast = () => {
    ToastAndroid.showWithGravity(
      "Preencha todos os campos corretamente",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };


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
        errorMessage={!validateDate(date) ? 'Data de nascimento inválida' : ''}
      />
      <Input
        label='CPF'
        value={cpf}
        keyboardType='number-pad'
        maxLength={14}
        onChangeText={(text: string) => {
          let value = cpfMask(text)
          setCpf(value)
        }}
        placeholder='999.999.999-99 (obrigatório)*'
        errorMessage={!validateCpf(cpf) && cpf !== '' ? 'Cpf inválido' : ''}
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
          validateForm() ? navigate('List' as never, {} as never) : showToast()
        }}>
          <ButtonText>Salvar</ButtonText>
        </RegisterButton>
      </ButtonWrapper>
    </ContainerRegister>
  )
}

export default RegisterScreen