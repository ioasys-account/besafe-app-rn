import React from 'react';
import Label from 'components/core/Label';
import {
  Container,
  CheckContainer,
  RiskContainer,
  Separator
} from 'components/presentation/Risk/styles';
import Header from 'components/core/Header';
import { View, FlatList } from 'react-native';
import Button from 'components/core//Button';
import COLORS from 'config/colors';
import Checkbox from 'components/core/Checkbox';
import { useNavigation } from '@react-navigation/native';

const RiskPresentation = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <Container>
      <View>
        <Header customBackFunction={goBack} />
        <Label fontSize={32} color={COLORS.black} fontWeight='bold'>
          Avaliação de risco
        </Label>
        <Label fontSize={16} color={COLORS.defaultText} marginTop='20px'>
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
