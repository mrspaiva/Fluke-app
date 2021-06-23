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
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await api.get(
  //       '/usage/records?startDate=2020-08-01&endDate=2020-08-03',
  //     );
  //     const data = response.data;
  //     console.log(data);
  //   }
  //   loadData();
  // }, []);

  return (
    <Container>
      <HeaderContainer>
        {/* <LogoCircle /> */}
        {/* <Logo style={{margin: 0, padding: 0}} /> */}
        <HeaderText>Fluke</HeaderText>
        <Icon name="user" color={'#000'} size={26} />
      </HeaderContainer>

      <WelcomeText>Olá, acompanhe seu consumo aqui :)</WelcomeText>

      <ConsumingCircle>
        <ProgressCircle
          percent={65}
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
              2.97
            </Text>
            <Text style={{fontSize: 20, color: '#333'}}> GB </Text>
            do plano
          </Text>
        </ProgressCircle>
      </ConsumingCircle>

      <FooterNavigation>
        <PackageInfo>
          <PackageValue>13 min</PackageValue>
          <PackageText>falados</PackageText>
        </PackageInfo>

        <PackageInfo>
          <PackageValue>2 GB</PackageValue>
          <PackageText>usados</PackageText>
        </PackageInfo>
      </FooterNavigation>
    </Container>
  );
};

export default Home;
