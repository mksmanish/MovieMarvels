import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {homeImage} from '../assets';

const Header = () => {
  const types = [
    {
      id: '0',
      name: 'IMAX',
    },
    {
      id: '1',
      name: '4DX',
    },
    {
      id: '2',
      name: 'PXL',
    },
    {
      id: '3',
      name: 'GOLD',
    },
    {
      id: '4',
      name: 'PLAYHOUSE',
    },
  ];
  return (
    <View>
      <ImageBackground
        style={{height: 180, aspectRatio: 5 / 2}}
        source={homeImage}>
        <Pressable
          style={{
            position: 'absolute',
            height: 130,
            backgroundColor: '#D3D3D3',
            padding: 10,
            borderRadius: 6,
            top: 150,
            width: '85%',
            left: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'gray',
              marginTop: 5,
            }}>
            Releasing in 1 day
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                MARVAL INFINITY
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'gray',
                  marginTop: 5,
                }}>
                U/A • ENGLISH
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 6,
                marginRight: 8,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  textAlign: 'center',
                  color: 'white',
                }}>
                BOOK
              </Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              marginTop: 8,
            }}>
            Fantasy, thriller, actions
          </Text>
        </Pressable>
      </ImageBackground>
      <View style={{marginTop: 105}}>
        <ScrollView horizontal>
          {types.map((item, index) => (
            <View
              style={{
                margin: 10,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 7,
                padding: 7,
              }}
              key={index}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
