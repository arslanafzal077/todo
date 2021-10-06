import React, { useState } from 'react';
import {
    View,
    Platform,
    KeyboardAvoidingView,
    ActivityIndicator,
} from 'react-native';
import styles from './style'
import { Button, ListItem, TextInputField } from '../../components';
import { connect } from 'react-redux'
import { addTodoListRequest, setStatusForEdit } from '../../redux/actions/AppActions'

const Detail = (props) => {

    const pressSubmit = () => {
        props.setStatusForEdit(true)
        props.navigation.navigate('Add')
    }

    let state = props.state.app.detail
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.mainBodyContainer}>
            <View style={styles.center}>
                {state.isLoading
                    ? <ActivityIndicator
                        size="large"
                    />
                    :
                    <>
                        <TextInputField
                            style={{ marginTop: '5%' }}
                            value={state.data.title}
                            title="What is to be done?"
                            placeholder="Title"
                            editable={false}
                        />
                        <TextInputField
                            style={{ marginTop: '5%', maxHeight: 100, }}
                            textContentType='none'
                            multiline={true}
                            editable={false}
                            value={state.data.description}
                            placeholder="Discription"
                            title="Discription"
                        />
                        <Button text={"Edit"} style={styles.btn} onPress={() => pressSubmit()} />
                    </>
                }


            </View>

        </KeyboardAvoidingView>
    )
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
    addTodoListRequest: (data) => dispatch(addTodoListRequest(data)),
    setStatusForEdit: (status) => dispatch(setStatusForEdit(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
