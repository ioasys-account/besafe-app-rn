import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Label from 'components/core/Label';
import Button from 'components/core/Button';
import Checkbox from 'components/core/Checkbox';
import COLORS from 'config/colors';
import { Container, ConditionsContainer, CheckContainer, Separator } from './styles';

const PreConditionsPresentation = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <View>
        <Label fontWeight='bold' fontSize={32} lineHeight={40} color={COLORS.black}>
          Condições preexistentes
        </Label>
        <Label fontSize={16} color={COLORS.defaultText} marginTop={30}>
          Marque condições que você possui atualmente ou já teve na vida.
        </Label>
      </View>
      <ConditionsContainer>
        <FlatList
          data={Array.from({ length: 10 }).map((_, index) => ({
            condition: 'Asma',
            id: index
          }))}
          renderItem={({ item }) => (
            <CheckContainer>
              <Checkbox label={item.condition} checkPosition='right' />
            </CheckContainer>
          )}
          ItemSeparatorComponent={() => <Separator />}
          keyExtractor={item => item.id.toString()}
        />
      </ConditionsContainer>
      <Button label='Próximo' action={() => navigate('Risk')} />
    </Container>
  );
};

export default PreConditionsPresentation;
