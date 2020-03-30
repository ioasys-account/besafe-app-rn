import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import Header from 'components/core/Header';
import Button from 'components/core//Button';
import Checkbox from 'components/core/Checkbox';
import COLORS from 'config/colors';
import { Container, CheckContainer, RiskContainer, Separator } from './styles';

const RiskPresentation = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <Container>
      <View>
        <Header customBackFunction={goBack} />
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          Avaliação de risco
        </Label>
        <Label fontSize={16} color={COLORS.defaultText} marginTop={20}>
          Marque os comportamentos de risco em que você esteve.
        </Label>
      </View>
      <RiskContainer>
        <FlatList
          data={Array.from({ length: 10 }).map((_, index) => ({
            label: 'Tive contato próximo com caso suspeito de COVID-19 nos últimos dias?',
            id: index
          }))}
          renderItem={({ item }) => (
            <CheckContainer>
              <Checkbox label={item.label} checkPosition='right' />
            </CheckContainer>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </RiskContainer>
      <Button
        label='Próximo'
        action={() =>
          navigate('Success', {
            title: "Cadastro\nconcluído!",
            subTitle:
              'Agora é hora de registrar como você se sente. Por favor, seja atencioso e fique tranquilo: vamos lidar com isso juntos!'
          })
        }
      />
    </Container>
  );
};

export default RiskPresentation;
