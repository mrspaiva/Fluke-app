import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  SearchDate,
  DataUsageSection,
  DateInfo,
  DataSection,
  MinutesInfo,
  DataInfo,
} from './styles';

const DataUsage = () => {
  return (
    <Container>
      <SearchDate placeholder="Busque por uma data" type="date" />

      <DataUsageSection>
        <DateInfo>01 de Junho de 2020</DateInfo>
        <DataSection>
          <Icon name="phone-call" color={'#000'} size={16} />
          <MinutesInfo>50 segundos</MinutesInfo>
        </DataSection>
        <DataSection>
          <Icon name="bar-chart" color={'#000'} size={16} />
          <DataInfo>1.5 GB</DataInfo>
        </DataSection>
      </DataUsageSection>

      <DataUsageSection>
        <DateInfo>01 de Junho de 2020</DateInfo>
        <DataSection>
          <Icon name="phone-call" color={'#000'} size={16} />
          <MinutesInfo>50 segundos</MinutesInfo>
        </DataSection>
        <DataSection>
          <Icon name="bar-chart" color={'#000'} size={16} />
          <DataInfo>1.5 GB</DataInfo>
        </DataSection>
      </DataUsageSection>

      <DataUsageSection>
        <DateInfo>01 de Junho de 2020</DateInfo>
        <DataSection>
          <Icon name="phone-call" color={'#000'} size={16} />
          <MinutesInfo>50 segundos</MinutesInfo>
        </DataSection>
        <DataSection>
          <Icon name="bar-chart" color={'#000'} size={16} />
          <DataInfo>1.5 GB</DataInfo>
        </DataSection>
      </DataUsageSection>
    </Container>
  );
};

export default DataUsage;
