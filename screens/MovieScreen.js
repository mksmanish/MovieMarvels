import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {search, check, share, menu, arrow, filter, safety} from '../assets';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import malls from '../data/malls';

const MovieScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const moviesData = route.params?.movies;
  const [selectedDate, setSelectedDate] = useState('');
  const [mall, setMall] = useState([]);
  const [seatsData, setSeatsData] = useState([]);

  const mallsdata = malls;
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 8,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={arrow}
          />
          <Text style={{fontSize: 18, fontWeight: '500', marginLeft: 10}}>
            {route.params?.movies?.name}
          </Text>
        </Pressable>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={search}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              marginHorizontal: 10,
            }}
            source={filter}
          />
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={share}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
        <Image
          style={{
            height: 25,
            width: 25,
          }}
          source={safety}
        />
        <Text style={{fontSize: 16, fontWeight: '500', marginLeft: 6}}>
          Your safety is our priority
        </Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date('2023-08-20')}
        endDate={new Date('2023-08-31')}
        initialSelectedDate={new Date('2020-08-22')}
        onSelectedDateChange={date => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="red"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      {mallsdata.map((item, index) => (
        <Pressable
          style={{margin: 10}}
          key={index}
          onPress={() => {
            setMall(item?.name);
            setSeatsData(item.tableData);
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>{item.name}</Text>
          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item?.showtimes}
              renderItem={({item, index}) => (
                <Pressable
                  onPress={() => {
                    if (selectedDate != '') {
                      navigation.navigate('Theatre', {
                        mall: mall,
                        name: route.params?.movies?.name,
                        timeSelected: item,
                        selectedDate: selectedDate,
                        tableSeats: seatsData,
                      });
                    }
                  }}
                  key={index}
                  style={{
                    borderColor: 'red',
                    borderWidth: 0.8,
                    width: 100,
                    borderRadius: 5,
                    margin: 5,
                    padding: 5,
                    marginTop: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      textAlign: 'center',
                    }}>
                    {item}
                  </Text>
                </Pressable>
              )}></FlatList>
          ) : null}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
