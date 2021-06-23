import React from 'react';
import {View, StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const Container = ({children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight + 24,
        backgroundColor: '#f0f0f0',
      }}>
      {children}
    </View>
  );
};

export const Header = styled.View`
  margin-bottom: 10%;
`;

export const HeaderText = styled.Text`
  font-size: 64px;
  display: flex;
  align-self: center;
`;
