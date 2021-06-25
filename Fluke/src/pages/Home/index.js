import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import api from '../../services/api';
import ProgressCircle from 'react-native-progress-circle';
import Logo from '../../assets/LogoIcon';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  HeaderContainer,
  HeaderText,
  WelcomeText,
  ConsumingCircle,
  FooterNavigation,
  PackageInfo,
  PackageValue,
  PackageText,
} from './styles';

const Home = () => {
  const [dataa, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/usage/packageInformation/', {
        headers: {
          Authorization: 'example@email.com',
        },
      });
      const contentData = response.data;
      setData(contentData);
    }
    loadData();
  }, []);

  function formatBytes(value) {
    const gigabytes = 1000;
    return (value / gigabytes).toFixed(1);
  }

  function formatPorcentage() {
    const result = dataa.data.topup / dataa.data.available;
    return Number(result) * 100;
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Fluke</HeaderText>
        <Icon name="user" color={'#000'} size={26} />
      </HeaderContainer>

      <WelcomeText>Olá, acompanhe seu consumo aqui :)</WelcomeText>

      <ConsumingCircle>
        <ProgressCircle
          percent={formatPorcentage()}
          radius={110}
          borderWidth={2}
          color="#0ef500"
          shadowColor="#dcdcdc"
          bgColor="#fff"
          style={{alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              textAlign: 'center',
              width: 100,
              color: '#999',
              lineHeight: 30,
            }}>
            Restam
            <Text style={{fontSize: 26, color: '#000', fontWeight: '600'}}>
              {' '}
              {formatBytes(dataa.data.subscription)}{' '}
            </Text>
            <Text style={{fontSize: 20, color: '#333'}}> GB </Text>
            do plano
          </Text>
        </ProgressCircle>
      </ConsumingCircle>

      <FooterNavigation>
        <PackageInfo>
          <PackageValue>{dataa.minutes.topup} min</PackageValue>
          <PackageText>adicionais</PackageText>
        </PackageInfo>

        <PackageInfo>
          <PackageValue>{formatBytes(dataa.data.topup)} GB</PackageValue>
          <PackageText>adicionais</PackageText>
        </PackageInfo>
      </FooterNavigation>
    </Container>
  );
};

export default Home;
