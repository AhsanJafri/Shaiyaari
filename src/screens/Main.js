import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';

export default function Main({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#065e54" />

      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#065e54',
            height: '13%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ffff',
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'serif',
              fontStyle: 'italic',
            }}>
            Shaiyaari
          </Text>
        </View>
        <View
          style={{
            height: '85%',
            width: '95%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              alignSelf: 'center',
              fontFamily: 'serif',
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: '10%',
            }}>
            Choose Any Of The Following Below
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 30,
                borderColor: '#065e54',
                width: '40%',
              }}
              onPress={() => {
                navigation.navigate('Screen');
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  padding: 10,
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}>
                POET
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                alignSelf: 'center',
                padding: 10,
                fontFamily: 'serif',
                fontStyle: 'italic',
                textAlign: 'center',
              }}>
              OR
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 30,
                borderColor: '#065e54',
                width: '40%',
              }}
              onPress={() => {
                navigation.navigate('PoemTitle');
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  padding: 10,
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  textAlign: 'center',
                }}>
                POEM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
