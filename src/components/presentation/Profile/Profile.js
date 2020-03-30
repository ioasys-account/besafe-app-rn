import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Picker from 'components/core/Picker';
import DatePicker from 'components/core/DatePicker';
import Checkbox from 'components/core/Checkbox';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { FormContainer, Container } from './styles';

const ProfilePresentation = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          Criar Perfil
        </Label>
        <TextInput placeholder='Nome completo' marginTop={24} />
        <Picker
          placeholder='Sexo'
          marginTop='24px'
          options={[
            {
              label: 'Feminino',
              value: 'female'
            },
            {
              label: 'Masculino',
              value: 'male'
            }
          ]}
        />
        <DatePicker label='Data de nascimento' marginTop={24} />
        <Checkbox label='Manter meus dados em sigilo' marginTop={24} />
      </FormContainer>
      <Button label='Próximo' action={() => navigate('PreConditions')} />
    </Container>
  );
};

export default ProfilePresentation;
