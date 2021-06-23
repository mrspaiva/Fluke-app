import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Header, HeaderText} from './styles';
import QuestionList from '../../services/faqList.json';

const FAQ = () => {
  const [expanded, setExpanded] = useState(true);
  const [question, setQuestion] = useState(QuestionList);

  const handlePress = () => setExpanded(!expanded);

  return (
    <Container>
      <Header>
        <HeaderText>FAQ</HeaderText>
      </Header>
      <FlatList
        data={question}
        keyExtractor={QuestionList => String(QuestionList.id)}
        renderItem={({item: QuestionList}) => (
          <>
            <List.Section
              style={{
                backgroundColor: expanded ? '#f0f0f0' : '#C3E5D7',
                paddingHorizontal: 16,
              }}>
              <List.Accordion
                onPress={handlePress}
                style={{
                  backgroundColor: expanded ? '#f0f0f0' : '#C3E5D7',
                  borderBottomWidth: expanded ? 1 : 0,
                  borderBottomColor: expanded ? '#dadbdf' : '#79CAA0',
                }}
                theme={{colors: {primary: '#79CAA0', text: '#79CAA0'}}}
                title={QuestionList.question}>
                <List.Item
                  theme={{
                    colors: {primary: '#79CAA0', text: '#535855'},
                  }}
                  description={QuestionList.answer}
                  descriptionStyle={{fontSize: 16, marginTop: -30}}
                  descriptionNumberOfLines={16}
                />
              </List.Accordion>
            </List.Section>
          </>
        )}
      />
    </Container>
  );
};

export default FAQ;
