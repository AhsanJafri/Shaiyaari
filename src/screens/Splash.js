import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 4000);
  });
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 60,
          }}>
          <Image
            source={require('../images/images.png')}
            tintColor="#FFFF"
            style={{width: 100, height: 100}}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              fontFamily: 'serif',
              fontStyle: 'italic',
            }}>
            Shaiyaari
          </Text>
        </View>
      </View>

      {/* </ScrollView>
  </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#065e54',
  },
});
export default Splash;
