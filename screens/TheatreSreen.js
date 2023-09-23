import {StyleSheet, Text, View, Image, Pressable, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {arrow, share, square} from '../assets';
import moment from 'moment';
import {MoviesCards} from '../Context';

const TheatreSreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {seats, setSeats} = useContext(MoviesCards);

  const OnSeatSelected = item => {
    const seatSelected = seats.find(seat => seat === item);
    if (seatSelected) {
      setSeats(seats.filter(seat => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginTop: 10,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={arrow}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              {route.params?.name}
            </Text>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'gray'}}>
              {route.params?.mall}
            </Text>
          </View>
        </Pressable>
        <View>
          <Image
            style={{
              height: 25,
              width: 25,
            }}
            source={share}
          />
        </View>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 24, fontWeight: '500'}}>
          {moment(route.params?.selectedDate).format('MMM DD YYYY')}
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500', marginTop: 4}}>
          {route.params?.timeSelected}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: 'gray',
            marginTop: 4,
          }}>
          CLASSIC {240}
        </Text>
      </View>
      <View style={{marginTop: 20}}></View>
      <FlatList
        numColumns={7}
        data={route.params?.tableSeats}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => OnSeatSelected(item)}
            style={{
              margin: 12,
              borderColor: 'red',
              borderWidth: 1,
              padding: 6,
              borderRadius: 6,
            }}
            key={index}>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'red'}}>
              {item}
            </Text>
          </Pressable>
        )}></FlatList>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '60%',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: 'orange',
              }}
              source={square}
            />
            <Text style={{fontSize: 14, fontWeight: '500', marginTop: 5}}>
              Selected
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: 'white',
              }}
              source={square}
            />
            <Text style={{fontSize: 14, fontWeight: '500', marginTop: 5}}>
              Vacant
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: 'gray',
              }}
              source={square}
            />
            <Text style={{fontSize: 14, fontWeight: '500', marginTop: 5}}>
              Occupied
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            Show end time approx
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'gray'}}>
            No Seats slected
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#D3D3D3',
            padding: 10,
            marginTop: 10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>Now with ticket</Text>
          <Text style={{fontSize: 15, fontWeight: '500'}}>cancellation </Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: 'red',
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        <Text></Text>
        <Pressable>
          <Text style={{fontSize: 22, fontWeight: '600', color: 'white'}}>
            Pay 0
          </Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default TheatreSreen;

const styles = StyleSheet.create({});
