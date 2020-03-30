import React from 'react';
import { Container, SuccessIcon } from 'screens/Success/styles';
import Header from 'components/core/Header';
import Label from 'components/core/Label';
import COLORS from 'config/colors';
import { View } from 'react-native';
import Button from 'components/core/Button';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const Success = ({
  route: {
    params: { title, subTitle }
  }
}) => {
  const { navigate, goBack } = useNavigation();

  return (
    <Container>
      <View>
        <Header customBackFunction={goBack} />
        <SuccessIcon />
        <View>
          <Label
            textAlign='center'
            fontSize={32}
            fontWeight='bold'
            color={COLORS.black}
            marginTop={16}
            lineHeight={40}
          >
            {title}
          </Label>
          <Label textAlign='center' fontSize={16} marginTop={16}>
            {subTitle}
          </Label>
        </View>
      </View>
      <Button label='Vamos lá!' action={() => navigate('Home')} />
    </Container>
  );
};

Success.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string
    })
  })
};

export default Success;
