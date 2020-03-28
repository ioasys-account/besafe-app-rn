import React from 'react';
import Label from 'components/core/Label';
import COLORS from 'config/colors';
import TextInput from 'components/core/TextInput';
import Picker from 'components/core/Picker';
import DatePicker from 'components/core/DatePicker';
import Checkbox from 'components/core/Checkbox';
import Button from 'components/core/Button';
import { FormContainer, Container } from 'components/presentation/Profile/styles';
import { useNavigation } from '@react-navigation/native';

const ProfilePresentation = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} color={COLORS.defaultText}>
          Criar Perfil
        </Label>
        <TextInput placeholder='Nome completo' marginTop='24px' />
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
        <DatePicker label='Data de nascimento' marginTop='24px' />
        <Checkbox label='Manter meus dados em sigilo' marginTop='24px' />
      </FormContainer>
      <Button label='Próximo' primary={false} action={() => navigate('PreConditions')} />
    </Container>
  );
};

export default ProfilePresentation;
