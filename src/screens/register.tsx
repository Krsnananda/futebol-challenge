import React, {useState} from "react";
import { Text } from "react-native";
import { Input } from 'react-native-elements' 
import { ButtonText, ButtonWrapper, ContainerRegister, RegisterButton, ReserveText, ReserveWrapper } from "../styles";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen:React.FC = () =>  {
  const [text, setText] = useState('')
  const [selected, setSelected] = useState('')

  return(
    <ContainerRegister>
      <Input
        label='Nome'
        value={text}
        onChangeText={(text: string) => setText(text)}
        placeholder='Nome completo (obrigatório)*'
        errorMessage={''}
      />
      <Input
        label='Data de nascimento'
        value={text}
        keyboardType='number-pad'
        onChangeText={(text: string) => setText(text)}
        placeholder='dd/mm/yyyy (obrigatório)*'
        errorMessage={''}
      />
      <Input
        label='CPF'
        value={text}
        keyboardType='number-pad'
        onChangeText={(text: string) => setText(text)}
        placeholder='999.999.999-99 (obrigatório)*'
        errorMessage={''}
      />
      <Input
        label='Posição'
        value={text}
        onChangeText={(text: string) => setText(text)}
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