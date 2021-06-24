import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  PlanSection,
  PlanText,
  PlanInfo,
  DataInfoSection,
  DataInfo,
  DataText,
  DataValueSection,
  DataValue,
  BuyButton,
  BuyButtonText,
} from './styles';

const AdditionalPlans = () => {
  return (
    <Container>
      <PlanSection>
        <PlanText>Meu Plano</PlanText>
        <PlanInfo>
          <DataInfo>
            <Icon name="phone-call" color={'#000'} size={16} />
            <DataText>100 minutos</DataText>
          </DataInfo>
          <DataInfo>
            <Icon name="bar-chart" color={'#000'} size={16} />
            <DataText>4.5 GB</DataText>
          </DataInfo>
          <DataInfo>
            <Icon name="message-circle" color={'#000'} size={16} />
            <DataText>40 sms</DataText>
          </DataInfo>
        </PlanInfo>
      </PlanSection>

      <PlanSection>
        <PlanText>Comprar Adicionais</PlanText>
        <DataInfoSection>
          <DataInfo>
            <Icon name="phone-call" color={'#000'} size={16} />
            <DataText> minutos </DataText>
          </DataInfo>
          <DataValueSection>
            <TouchableOpacity>
              <Icon name="minus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
            <DataValue> 100 </DataValue>
            <TouchableOpacity>
              <Icon name="plus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
          </DataValueSection>
        </DataInfoSection>

        <DataInfoSection>
          <DataInfo>
            <Icon name="bar-chart" color={'#000'} size={16} />
            <DataText> Dados (GB) </DataText>
          </DataInfo>
          <DataValueSection>
            <TouchableOpacity>
              <Icon name="minus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
            <DataValue> 1.5 </DataValue>
            <TouchableOpacity>
              <Icon name="plus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
          </DataValueSection>
        </DataInfoSection>

        <DataInfoSection>
          <DataInfo>
            <Icon name="message-circle" color={'#000'} size={16} />
            <DataText> sms </DataText>
          </DataInfo>
          <DataValueSection>
            <TouchableOpacity>
              <Icon name="minus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
            <DataValue> 10 </DataValue>
            <TouchableOpacity>
              <Icon name="plus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
          </DataValueSection>
        </DataInfoSection>
      </PlanSection>

      <TouchableOpacity>
        <BuyButton>
          <BuyButtonText>Comprar</BuyButtonText>
        </BuyButton>
      </TouchableOpacity>
    </Container>
  );
};

export default AdditionalPlans;
