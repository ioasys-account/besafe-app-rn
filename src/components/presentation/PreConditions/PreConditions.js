import React from 'react';
import Label from 'components/core/Label';
import COLORS from 'config/colors';
import {
  Container,
  ConditionsContainer,
  CheckContainer,
  Separator
} from 'components/presentation/PreConditions/styles';
import { View, FlatList } from 'react-native';
import Button from 'components/core/Button';
import Checkbox from 'components/core/Checkbox';

const PreConditionsPresentation = () => (
  <Container>
    <View>
      <Label fontSize={32} color={COLORS.defaultText} fontWeight='bold'>
        Condições preexistentes
      </Label>
      <Label fontSize={16} color={COLORS.defaultText} marginTop='30px'>
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
    <Button label='Próximo' />
  </Container>
);

export default PreConditionsPresentation;
