import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { TextInputField, Button } from '../../components';
import { connect } from 'react-redux'
import { signupCallRequest } from '@redux/actions/RootActions'

const { height } = Dimensions.get('window');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const pressSubmit = () => {
    if (validateEmail(email)) {
      if (password === "" || password != confirmPassword) {
        alert("Check your password")
      } else {
        console.log('here in else');
        const params = {
          email: email,
          password: password,
          password_confirmation: confirmPassword
        };
        props.signupCallRequest({ navigation: props.navigation, body: params })
      }
    } else {
      alert("Please enter a valid email address!")
    }
  }

  let state = props.state.root.signup
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainBodyContainer}>
      <View style={styles.center}>
        {state.isLoading
          ? <ActivityIndicator
            size="large"
          />
          : null}
        <ScrollView style={styles.inputFieldContainer}>
          <TextInputField
            style={{ marginTop: '3%' }}
            type="email"
            value={email}
            title="Email"
            placeholder="Your e-mail "
            onChangeText={text => setEmail(text)}
          />
          <TextInputField
            style={{ marginTop: '3%' }}
            secureTextEntry={true}
            textContentType='none'
            value={password}
            placeholder="Your Password"
            title="Password"
            onChangeText={value => setPassword(value)}
          />
          <TextInputField
            style={{ marginTop: '3%' }}
            secureTextEntry={true}
            textContentType="none"
            value={confirmPassword}
            placeholder="Confirm Your Password"
            title="Confirm Password"
            onChangeText={value => setConfirmPassword(value)}
          />
        </ScrollView>

        <Button text="Sign Up" style={styles.btn} onPress={() => pressSubmit()} />

      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainBodyContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#21034f',
    marginBottom: '3%',
  },
  inputFieldContainer: {
    // height: '50%',
    width: '90%',
    paddingVertical: "2%",
    borderRadius: 4,
    backgroundColor: 'white',
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  btnAdd: {
    alignSelf: 'center',
    backgroundColor: "white",
    marginTop: '3%',
  },
  btnTitle: {
    color: "#02a5f7",
    fontSize: 18
  },
  textDetais: {
    alignItems: 'center',
  },
  fontWhite: {
    color: '#6a00ff',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
    signupCallRequest: (data) => dispatch(signupCallRequest(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup)