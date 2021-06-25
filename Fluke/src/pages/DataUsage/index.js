import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Feather';
import ApiData from '../../services/api';
import {
  Container,
  SearchDateSection,
  SearchDate,
  DataUsageSection,
  DateInfo,
  DataSection,
  MinutesInfo,
  DataInfo,
} from './styles';

const DataUsage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await ApiData.get(
        '/usage/records?startDate=2020-06-012&endDate=2020-06-26',
      );
      const contentData = response.data;
      setData(contentData);
    }
    fetchData();
  }, []);

  function formatBytes(value) {
    const megabytes = 0.000001;
    return (value * megabytes).toFixed(1);
  }

  // console.log();

  function formatDate(value) {
    // const local = moment().locale('pt-br');
    return moment(value).format('LL');
  }

  return (
    <Container>
      <SearchDateSection>
        <Icon name="search" color={'#000'} size={20} />
        <SearchDate placeholder="Busque por uma data" type="date" />
      </SearchDateSection>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <DataUsageSection>
            <DateInfo>{formatDate(item.date)}</DateInfo>
            <DataSection>
              <Icon name="phone-call" color={'#000'} size={16} />
              <MinutesInfo>{item.voice} segundos</MinutesInfo>
            </DataSection>
            <DataSection>
              <Icon name="bar-chart" color={'#000'} size={16} />
              <DataInfo>{formatBytes(item.data)} MB</DataInfo>
            </DataSection>
          </DataUsageSection>
        )}
      />
    </Container>
  );
};

export default DataUsage;
