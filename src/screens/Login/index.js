import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { TextInputField, Button } from '../../components';
import { connect } from 'react-redux'
import { loginCallRequest } from '@redux/actions/RootActions'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const pressSubmit = async () => {
        if (email === '' && password === '') {
            Alert.alert('Enter details to signin!')
        } else {
            if (validateEmail(email)) {
                const params = {
                    email: email,
                    password: password,
                };
                props.loginCallRequest({ navigation: props.navigation, body: params })
            } else {
                alert("Please enter a valid email address!")
            }
        }
    }

    let state = props.state.root.login
    return (
        <View style={styles.mainBodyContainer}>
            {state.isLoading ? <View style={[styles.mainBodyContainer, { alignItems: 'center', justifyContent: 'center', }]}>
                <ActivityIndicator
                    size="large"
                    color="#02a5f7"
                />
            </View> :
                <>
                    <Text
                        style={[
                            styles.title,
                            {
                                fontWeight: 'bold',
                                fontSize: 30,
                                marginTop: '1%',
                                marginBottom: '5%',
                            },
                        ]}>Team member login</Text>
                    <View style={styles.center}>
                    
                        <View style={styles.inputFieldContainer}>
                            <TextInputField
                                // name="Email"
                                type="email"
                                value={email}
                                title="Email"
                                placeholder="Your e-mail "
                                onChangeText={text => setEmail(text)}
                            />
                            <TextInputField
                                style={{ marginTop: '3%' }}
                                secureTextEntry={true}
                                // name="Password"
                                value={password}
                                placeholder="Your Password"
                                title="Password"
                                onChangeText={value => setPassword(value)}
                            />
                        </View>
                        <Button text="Login" style={styles.btn} onPress={() => { pressSubmit() }} />
                        <TouchableOpacity style={styles.links} onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={styles.fontWhite}>Don't have an account?</Text>
                            <Text style={[styles.fontWhite, { color: '#02a5f7' }]}> Register Now</Text>
                        </TouchableOpacity>
                        <View style={styles.textDetais} />
                    </View>
                </>}
        </View>
    );
};

const styles = StyleSheet.create({
    mainBodyContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: "10%"
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#21034f',
        marginTop: '20%',
    },
    inputFieldContainer: {
        paddingVertical: '4%',
        width: '90%',
        borderRadius: 4,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        alignSelf: 'center',
        marginTop: '3%',
    },
    textDetais: {
        alignItems: 'center',
    },
    links: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '85%',
        marginTop: '5%',
    },
    fontWhite: {
        color: '#21034f',
    },

});


const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
    loginCallRequest: (data) => dispatch(loginCallRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)