import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Picker from 'components/core/Picker';
import DatePicker from 'components/core/DatePicker';
import Checkbox from 'components/core/Checkbox';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { FormContainer, Container } from './styles';
import { getLanguage } from 'helpers';

const ProfilePresentation = () => {
  const { navigate } = useNavigation();
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Container>
      <FormContainer>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          {translate('profile-create')}
        </Label>
        <TextInput placeholder={translate('profile-fullname')} marginTop={24} />
        <Picker
          placeholder={translate('gender')}
          marginTop='24px'
          options={
            [
            {
              label: translate('profile-female'),
              value: 'female'
            },
            {
              label: translate('profile-male'),
              value: 'male'
            }
          ]}
        />
        <DatePicker label={translate('profile-birthdate')} marginTop={24} />
        <Checkbox label='Manter meus dados em sigilo' marginTop={24} />
      </FormContainer>
      <Button label={translate('next')} action={() => navigate('PreConditions')} />
    </Container>
  );
};

export default ProfilePresentation;
