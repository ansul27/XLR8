import { Text, TouchableOpacity, Fragment, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Login from '../../components/Login';
import React, { Component, useCallback, useState } from 'react';
import { TextInput } from 'react-native';


import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View
} from 'react-native';
//import { LoginForm } from './login-form';
//import Style from './login.style';
//import { NewPasswordForm } from './new-password-form';

export default class ChooseProfile extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#EEF6F5', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        {/* <Card
          containerStyle={{
            borderRadius: 20,
            width: 600,
            height: 400,
            marginRight: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 1,
            justifyContent: 'center',
            alignContent:'center',
            backgroundColor: '#D3D3'          
          }}
          wrapperStyle={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingBottom: 0,
            justifyContent: 'center',
            alignContent:'center'
          }}
        > */}
        <View style={{borderRadius: 20, width: '40%', backgroundColor: '#D3D3', justifyContent: 'center', alignContent: 'center'}}>
          <View style={{ backgroundColor: '#3D3D', width: '60%', justifyContent: 'center', alignContent: 'flex-start'}}>
            <Text style={styles.Header}> Login </Text>
            <Text style={styles.Desc}> Please login to your account</Text>
          </View>
          <View style={styles.loginTextSection}>
            <TextInput placeholder='      Email Address' style={styles.inputText} />
            <TextInput placeholder='      Password' style={styles.inputText} />
          </View>
          <View style={{ backgroundColor: '#EEF6F5'}}>
          <TouchableOpacity
            style={styles.LoginButtonStyle}
            activeOpacity={.5}

          >
            <Text style={styles.TextStyle}> Login </Text>
            
          </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={Actions.forgotPassword}>
            <Text style={styles.ForgotPasswordStyle}> Forgot Password? </Text>
          </TouchableOpacity>


        {/* </Card> */}
        </View>
      </View>
    );
  }

}



const styles = StyleSheet.create({

  LoginButtonStyle: {
    width: 350,
    height: 40,
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft:30,
    // marginRight:30,
    backgroundColor: '#166ed5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  TextStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  ForgotPasswordStyle: {
    fontSize: 20,
    color: '#2778d8',
    textAlign: 'center',
  },
  Header: {
    fontSize: 35,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  Desc: {
    fontSize: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  loginTextSection: {
    width: '100%',
    height: '30%',
  },

  inputText: {
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 40,
    fontSize: 20
  }

});




// import { Text, TouchableOpacity, Fragment, ScrollView, StyleSheet } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import Login from '../../components/Login';
// import React, { Component, useCallback, useState } from 'react';
// import { TextInput } from 'react-native';


// import PropTypes from 'prop-types';
// import {
//   ActivityIndicator,
//   Image,
//   ImageBackground,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   View
// } from 'react-native';
// //import { LoginForm } from './login-form';
// //import Style from './login.style';
// //import { NewPasswordForm } from './new-password-form';

// export default class ChooseProfile extends Component {
//   render() {
//     return (
//       <View style={{ backgroundColor: '#EEF6F5', flex: 1}}> 
//       <Card
//           containerStyle={{
//             borderRadius: 20,
//             width: 600,
//             height: 400,
//             marginRight: 2,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.3,
//             shadowRadius: 1
//           }}
//           wrapperStyle={{
//             borderTopRightRadius: 20,
//             borderTopLeftRadius: 20,
//             paddingBottom: 0
//           }}
//       >
//       <Button
//          containerStyle={{padding:10, width: 250, overflow:'hidden', 
//          borderTopLeftRadius: 20,
//          borderTopRightRadius: 20,
//         borderRadius:20,
//         shadowOffset:{  width: 0,  height: 2,  },
//         shadowColor: '#000',
//         shadowOpacity: 0.3,
//         shadowRadius: 1
//       }}
//         title="Login"
//       > </Button>
//       <Button
//          containerStyle={{padding:10, width:250, overflow:'hidden', 
//          borderTopLeftRadius: 20,
//          borderTopRightRadius: 20,
//         borderRadius:20}}
//       title="Forgot Password?"
//       > 
//       </Button>
//       </Card>  
//       </View>
//     );
//   }

// }













// //<Login />
// <TouchableOpacity style={Style.buttonContainer}>
// <Button
//   containerStyle={{padding:10, height:25, width: 200, overflow:'hidden', 
//   borderRadius:4, backgroundColor: '#166ed5'}}
//   title="Login"
// > </Button>
// </TouchableOpacity>
// <TouchableOpacity onPress={Actions.forgotPassword}>
// <Button 
// title="Forgot Password?"
// > 
// </Button>
// </TouchableOpacity>