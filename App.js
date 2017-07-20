import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight } from 'react-native';
import Button from 'apsl-react-native-button'

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'Home',
          passProps: { title: 'ระบบคำนวณค่า BMI' }
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      component:MyView,
      title: '',
    });
  }

  render() {
    return (
      <View style={{flex:1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <Text  style={{fontSize:30,}}>{ this.props.title }</Text>
        <Button style={{ borderRadius:24, borderWidth: 3,backgroundColor: 'white',marginLeft:50,marginRight:50,marginTop:25}} textStyle={{fontWeight:'900',fontSize: 18,color:'black'}} onPress={this._onForward}>
           Login
        </Button>
        <Button style={{ borderRadius:24, borderWidth: 3,backgroundColor: 'white',marginLeft:50,marginRight:50,marginTop:10}} textStyle={{fontWeight:'900',fontSize: 18,color:'black'}} onPress={this._onForward}>
           Register
        </Button>
      </View>
    )
  }
}

class MyView extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const nextRoute = {
      component: MyView,
      title: 'Bar That',
      passProps: { title: 'bar' }
    };
    return(
      <TouchableHighlight onPress={() => this._handleNextPress('MyScene')}>
        <Text style={{marginTop: 200, alignSelf: 'center'}}>
          See you on the other nav {this.props.title}!
        </Text>
      </TouchableHighlight>
    );
  }
}