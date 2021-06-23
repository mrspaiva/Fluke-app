import React from 'react';
import styled from 'styled-components/native';
import {View, StatusBar} from 'react-native';

export const Container = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#f0f0f0',
      }}>
      {children}
    </View>
  );
};

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10%;
`;

export const HeaderText = styled.Text`
  font-size: 30px;
`;

export const LogoCircle = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #0f0;
`;

export const WelcomeText = styled.Text`
  font-size: 22px;
  width: 60%;
  display: flex;
  align-items: center;
`;

export const ConsumingCircle = styled.View`
  display: flex;
  height: 45%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5%;
`;

export const FooterNavigation = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const PackageInfo = styled.View`
  display: flex;
  align-items: center;
`;

export const PackageValue = styled.Text`
  font-size: 26px;
`;

export const PackageText = styled.Text`
  color: #999;
  font-size: 20px;
`;
