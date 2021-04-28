import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

export class PoemName extends React.Component {
  constructor() {
    super();
    this.state = {
      line: [],
      loading: false,
    };
  }
  componentDidMount() {
    const {item} = this.props.route.params;
    this.setState({line: item.lines});
  }
  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#065e54',
              width: '100%',
              height: '12%',
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
                fontSize: 20,
                color: '#FFFF',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'serif',
                fontStyle: 'italic',
              }}>
              {this.props.route.params.item.title}
            </Text>
          </View>
          <ScrollView style={{marginBottom: 10}}>
            {this.state.line.map((item) => {
              return (
                <View
                  style={{
                    borderWidth: 2,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: 2,
                    borderColor: '#065e54',
                    borderRadius: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      padding: 8,
                      fontFamily: 'serif',
                      fontStyle: 'italic',
                    }}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  }
}

export default PoemName;
