import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {search, check, share, menu, arrow, filter} from '../assets';

const MovieScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const moviesData = route.params?.movies;
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
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
