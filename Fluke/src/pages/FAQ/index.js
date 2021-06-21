import React from 'react';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Header, HeaderText} from './styles';

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <Container>
      <Header>
        <HeaderText>FAQ</HeaderText>
        <List.Section style={{backgroundColor: '#C3E5D7'}}>
          <List.Accordion
            onPress={handlePress}
            style={{
              backgroundColor: expanded ? '#f0f0f0' : '#C3E5D7',
              borderBottomWidth: expanded ? 1 : 0,
              borderBottomColor: expanded ? '#dadbdf' : '#79CAA0',
            }}
            theme={{colors: {primary: '#79CAA0', text: '#79CAA0'}}}
            title="O que é a Fluke?">
            <List.Item
              style={{paddingTop: 0, marginTop: 0}}
              theme={{
                colors: {primary: '#79CAA0', text: '#535855'},
              }}
              description="O Fluke App é o aplicativo da Fluke. É por lá que você vai pedir e ativar seu chip, comprar seu pacote e acompanhar seu consumo como e quando você quiser, sempre que você precisar. Nele também são feitas todas as alterações de pacote, compra de adicionais, pedido de portabilidade e chat com o time salva-vidas."
              descriptionNumberOfLines={10}
            />
          </List.Accordion>
        </List.Section>
      </Header>
    </Container>
  );
};

export default FAQ;
