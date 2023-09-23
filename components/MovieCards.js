import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import movies from '../data/movies';
import Header from './Header';

const MovieCards = () => {
  const data = movies;
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={Header}
        data={data}
        renderItem={({item}) => (
          <Pressable style={{margin: 10}} key={item.id}>
            <Image
              style={{
                aspectRatio: 2 / 3,
                height: 240,
                borderRadius: 6,
                marginLeft: 10,
                marginRight: 15,
              }}
              source={{uri: item.image}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  marginTop: 8,
                }}>
                {item.name.substring(0, 16) + '...'}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  marginTop: 4,
                  color: 'gray',
                }}>
                U/A • {item.language}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  marginTop: 4,
                }}>
                {item.genre}
              </Text>
              <Pressable
                style={{
                  backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  borderRadius: 6,
                  width: 100,
                  marginTop: 4,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    textAlign: 'center',
                    color: 'white',
                  }}>
                  BOOK
                </Text>
              </Pressable>
            </View>
          </Pressable>
        )}></FlatList>
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({});
