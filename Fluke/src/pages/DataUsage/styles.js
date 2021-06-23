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

export const SearchDate = styled.TextInput`
  margin-bottom: 10%;
`;

export const DataUsageSection = styled.View`
  width: 100%;
  height: auto;
  border-width: 1.5px;
  border-color: #999;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 10%;
`;

export const DateInfo = styled.Text`
  margin-bottom: 10%;
`;

export const DataSection = styled.View`
  display: flex;
  flex-direction: row;
`;

export const MinutesInfo = styled.Text`
  margin-bottom: 3%;
  padding-left: 3%;
`;

export const DataInfo = styled.Text`
  padding-left: 3%;
`;
