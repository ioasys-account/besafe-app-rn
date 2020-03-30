import React from 'react';
import { Container, SuccessIcon } from 'screens/Profile/styles';
import Header from 'components/core/Header';
import Label from 'components/core/Label';
import COLORS from 'config/colors';
import { View } from 'react-native';
import Button from 'components/core/Button';
import { useNavigation } from '@react-navigation/native';

const Success = () => {
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
            Cadastro{'\n'}concluído!
          </Label>
          <Label textAlign='center' fontSize={16} marginTop={16}>
            Agora é hora de registrar como você se sente. Por favor, seja atencioso e fique
            tranquilo: vamos lidar com isso juntos!
          </Label>
        </View>
      </View>
      <Button label='Vamos lá!' action={() => navigate('Home')} />
    </Container>
  );
};

export default Success;
