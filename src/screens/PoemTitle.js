import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export class PoemTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      authors: [],
      loading: false,
    };
  }
  componentDidMount() {
    fetch('https://poetrydb.org/title')
      .then((response) => response.json())
      .then((result) => this.setState({authors: result.titles}))
      .then(() => console.log(this.state.authors))
      .catch((error) => console.log('error', error));
  }
  render() {
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
            <TouchableOpacity
              style={{position: 'absolute', left: 10}}
              onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: 'white', fontSize: 30}}>{'<--'}</Text>
            </TouchableOpacity>
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
                marginTop: '5%',
              }}>
              POEM LIST
            </Text>
            <FlatList
              data={this.state.authors}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      justifyContent: 'space-evenly',
                      marginVertical: '2%',
                    }}>
                    <TouchableOpacity
                      style={{
                        borderWidth: 2,
                        borderRadius: 30,
                        borderColor: '#065e54',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        this.props.navigation.navigate('PoemByTitle', {
                          name: item,
                        });
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
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

export default PoemTitle;
