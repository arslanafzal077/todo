import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { StackActions } from '@react-navigation/native';
import Storage from '@utils/storage';

const Splash = (props) => {

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setTimeout(() => {
                getData();
            }, 500);
        });
        return unsubscribe;
    }, [props.navigation]);

    const getData = async () => {
        try {
            const value = await Storage.retrieveData('@token')
            if (value !== null) {
                props.navigation.dispatch(
                    StackActions.replace('App')
                );
            } else {
                props.navigation.dispatch(
                    StackActions.replace('Root')
                );
            }
        } catch (e) {
        }
    }

    return (
        <View style={styles.mainBodyContainer}>
            <ActivityIndicator
                size="large"
                color="#02a5f7"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainBodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Splash;
