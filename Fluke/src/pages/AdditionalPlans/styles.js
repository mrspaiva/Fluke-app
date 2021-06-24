import React from 'react';
import {View, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const Container = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        paddingTop: StatusBar.currentHeight + 24,
        backgroundColor: '#f0f0f0',
      }}>
      {children}
    </View>
  );
};

export const PlanSection = styled.View`
  margin-bottom: 15%;
`;

export const PlanText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 2%;
`;

export const PlanInfo = styled.View`
  width: 100%;
  border-color: #999;
  border-width: 1px;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 2%;
`;

export const DataInfoSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: #999;
  border-bottom-width: 1px;
  padding: 16px 0;
`;

export const DataInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2%;
`;

export const DataText = styled.Text`
  margin-left: 2%;
  font-size: 18px;
`;

export const DataValueSection = styled.Text`
  font-size: 18px;
`;

export const DataValue = styled.Text``;

export const BuyButton = styled.View`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #024540;
  border-radius: 20px;
  width: 70%;
  height: 40px;
`;

export const BuyButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
