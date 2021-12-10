import React, {useState} from "react";
import { StackActions, useNavigation } from '@react-navigation/native';
import { ToastAndroid } from "react-native";
import { Input } from 'react-native-elements' 
import { ButtonText, ButtonWrapper, ContainerRegister, RegisterButton, ReserveText, ReserveWrapper } from "../styles";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from '@react-native-async-storage/async-storage'
/**
 * ========
 * Utils
 * ========
 */
import {dateMask, cpfMask} from "../utils/masks"
import { validateCpf, validateDate } from "../utils/validations"

interface Props {
  route: any
}

const RegisterScreen:React.FC<Props> = ({route}) =>  {
  const params = route.params
  const [roles, setRoles] = useState(['-','Goleiro', 'Lateral', 'Zagueiro', 'Volante', 'Meia', 'Atacante'])
  const [date, setDate] = useState(params ? params.user.date : '')
  const [name, setName] = useState(params ? params.user.name : '')
  const [cpf, setCpf] = useState(params ? params.user.cpf : '')
  const [position, setPosition] = useState(params ? params.user.position : '')
  const [selected, setSelected] = useState(params ? params.user.reserve : '')
  const pushAction = StackActions.push('List')
  const navigation = useNavigation()

console.log(params.user)
  const validateForm = () => {
    return Boolean(date && name && cpf && validateCpf(cpf) && validateDate(date))
  }
  
  const showToast = () => {
    ToastAndroid.showWithGravity(
      "Campos nome, data de nascimento e cpf são obrigatórios, favor preencher corretamente",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  const saveDate = () => {
    const user = {name: name, date: date, cpf: cpf, position: position, reserve: selected}
    console.log(user)
    try {
      AsyncStorage.setItem(`@time:${cpf}`, JSON.stringify(user))
    } catch (error) {
      console.log(error)      
    }
  }

  return(
    <ContainerRegister>
      <Input
        label='Nome'
        value={name}
        onChangeText={(text: string) => setName(text)}
        placeholder='Nome completo (obrigatório)*'
        errorMessage={''}
        disabled={params ? true : false}
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
        errorMessage={!validateDate(date) && date !== '' ? 'Data de nascimento inválida' : ''}
        disabled={params ? true : false}
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
        disabled={params ? true : false}
      />
      <ReserveWrapper>
        <ReserveText>Posição</ReserveText>
      </ReserveWrapper>
      <Picker
        style={{marginLeft: 5}}
        selectedValue={position}
        onValueChange={(item) => setPosition(item)}
      >
          {roles.map((item, index) => (
            <Picker.Item key={index} color={'#878682'} label={item} value={item} />
          ))}
      </Picker>
      <ReserveWrapper>
        <ReserveText>Reserva</ReserveText>
      </ReserveWrapper>
      <Picker
        style={{marginLeft: 5}}
        selectedValue={selected}
        onValueChange={(item) => setSelected(item)}
      >
        <Picker.Item color={'#878682'} label='-' value='-'/>
        <Picker.Item color={'#878682'} label='SIM' value='SIM'/>
        <Picker.Item color={'#878682'} label='NÃO' value='NÃO'/>
      </Picker>
      <ButtonWrapper>
        <RegisterButton onPress={() => {
          validateForm() ? (saveDate(), navigation.dispatch(pushAction)) : showToast()
        }}>
          <ButtonText>Salvar</ButtonText>
        </RegisterButton>
      </ButtonWrapper>
    </ContainerRegister>
  )
}

export default RegisterScreen