import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight, TextInput} from 'react-native';
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

  _onLogin = () => {
    this.props.navigator.push({
      component:MyView,
      title: '',
    });
  }

   _onRegis = () => {
    this.props.navigator.push({
      component:RegisterComponent,
      title: '',
    });
  }

  render() {
    return (
      <View style={{flex:1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}}>
        <Text  style={{fontSize:30,}}>{ this.props.title }</Text>
        <Button style={{ borderRadius:24, borderWidth: 3,backgroundColor: 'white',marginLeft:50,marginRight:50,marginTop:25}} textStyle={{fontWeight:'900',fontSize: 18,color:'black'}} onPress={this._onLogin}>
           Login
        </Button>
        <Button style={{ borderRadius:24, borderWidth: 3,backgroundColor: 'white',marginLeft:50,marginRight:50,marginTop:10}} textStyle={{fontWeight:'900',fontSize: 18,color:'black'}} onPress={this._onRegis}>
           Register
        </Button>
      </View>
    )
  }
}

class MyView extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Username',password: 'Password' };
  }
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
    <View style={{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,}}>
        
      <Text style={{textAlign:'left',fontSize:20,alignSelf: 'stretch'}}>Username</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginBottom:10}}
          onChangeText={(text) => this.setState({username})}
        />
      <Text style={{textAlign:'left',fontSize:20,alignSelf: 'stretch'}}>Password</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,padding:10}}
          onChangeText={(text) => this.setState({password})}
        />
    </View>
    );
  }
}

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Username',password: 'Password' };
  }
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
    <View style={{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,}}>
        
      <Text style={{textAlign:'left',fontSize:20,alignSelf: 'stretch'}}>Username</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginBottom:10}}
          onChangeText={(text) => this.setState({username})}
        />
      <Text style={{textAlign:'left',fontSize:20,alignSelf: 'stretch'}}>Password</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,padding:10,marginBottom:10}}
          onChangeText={(text) => this.setState({password})}
        />
      <Text style={{textAlign:'left',fontSize:20,alignSelf: 'stretch'}}>Confirm password</Text>
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,padding:10}}
          onChangeText={(text) => this.setState({password})}
        />
    </View>
    );
  }
}