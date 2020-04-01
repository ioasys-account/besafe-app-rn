import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';

import Label from 'components/core/Label';
import TextInput from 'components/core/TextInput';
import Picker from 'components/core/Picker';
import DatePicker from 'components/core/DatePicker';
import Button from 'components/core/Button';
import COLORS from 'config/colors';
import { FormContainer, Container } from './styles';
import { getLanguage } from 'helpers';

const ProfilePresentation = ({ values }) => {
  const { navigate } = useNavigation();
  const { t: translate, i18n } = useTranslation();
  const [name, setName] = useState('');

  useEffect(() => {
    i18n.changeLanguage(getLanguage());
  }, []);

  return (
    <Formik
      initialValues={{
        name: '',
        gender: { label: '', value: '' },
        date: null
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required(),
        gender: yup.object().shape({
          label: yup.string().required,
          value: yup.string().required()
        }),
        date: yup.date().required()
      })}
    >
      {({ values, errors, setFieldValue, handleChange }) => (
        <Container>
          <FormContainer>
            <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
              {translate('profile-create')}
            </Label>
            <TextInput
              placeholder={translate('profile-fullname')}
              marginTop={24}
              onChange={value => setName(value)}
              hasError={name}
              value={name}
            />
            {errors.name && <Label color={COLORS.red}>{translate('required-field')}</Label>}
            {/* <Picker
              placeholder={translate('gender')}
              marginTop='24px'
              options={[
                {
                  label: translate('profile-female'),
                  value: 'female'
                },
                {
                  label: translate('profile-male'),
                  value: 'male'
                }
              ]}
              value={values.gender}
              onValueChange={handleChange('gender')}
            />
            <DatePicker label={translate('profile-birthdate')} marginTop={24} value={values.date} onChange={handleChange('date')} /> */}
          </FormContainer>
          <Button label={translate('next')} action={() => navigate('PreConditions')} />
        </Container>
      )}
    </Formik>
  );
};

ProfilePresentation.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ProfilePresentation;
