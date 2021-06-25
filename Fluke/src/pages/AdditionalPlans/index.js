import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ApiData from '../../services/api';
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
  const [dataa, setData] = useState([]);
  const [minutes, setMinutes] = useState(10);
  const [bytes, setBytes] = useState(1.5);
  const [sms, setSms] = useState(5);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ApiData.get('/usage/packageInformation/', {
          headers: {
            Authorization: 'example@email.com',
          },
        });
        const data = response.data;
        setData(data);
      } catch (err) {
        console.log('erro');
      }
    }
    fetchData();
  }, []);

  function formatBytes(value) {
    const gigabytes = 1000;
    return (value / gigabytes).toFixed(1);
  }

  async function buyRequest() {
    try {
      await ApiData.post('/usage/topupPurchase', {
        headers: {
          Authorization: 'example@email.com',
        },
      });
      alert('Compra realizada com sucesso');
    } catch (err) {
      console.log('erro');
    }
  }

  return (
    <Container>
      <PlanSection>
        <PlanText>Meu Plano</PlanText>
        <PlanInfo>
          <DataInfo>
            <Icon name="phone-call" color={'#000'} size={16} />
            <DataText>{dataa.minutes.subscription} minutos</DataText>
          </DataInfo>
          <DataInfo>
            <Icon name="bar-chart" color={'#000'} size={16} />
            <DataText>{formatBytes(dataa.data.subscription)} GB</DataText>
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
            <TouchableOpacity
              onPress={() => {
                setMinutes(minutes - 10);
              }}>
              <Icon name="minus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
            <DataValue> {minutes} </DataValue>
            <TouchableOpacity
              onPress={() => {
                setMinutes(minutes + 10);
              }}>
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
            <TouchableOpacity
              onPress={() => {
                setBytes(bytes - 1.5);
              }}>
              <Icon name="minus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
            <DataValue> {bytes} </DataValue>
            <TouchableOpacity
              onPress={() => {
                setBytes(bytes + 1.5);
              }}>
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
            <TouchableOpacity
              onPress={() => {
                setSms(sms - 2);
              }}>
              <Icon name="minus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
            <DataValue> {sms} </DataValue>
            <TouchableOpacity
              onPress={() => {
                setSms(sms + 2);
              }}>
              <Icon name="plus-circle" color={'#000'} size={16} />
            </TouchableOpacity>
          </DataValueSection>
        </DataInfoSection>
      </PlanSection>

      <TouchableOpacity onPress={buyRequest}>
        <BuyButton>
          <BuyButtonText>Comprar</BuyButtonText>
        </BuyButton>
      </TouchableOpacity>
    </Container>
  );
};

export default AdditionalPlans;
