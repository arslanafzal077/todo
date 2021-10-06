import React, { useState, useEffect } from 'react';
import {
    View,
    Platform,
    KeyboardAvoidingView,
    ActivityIndicator,
} from 'react-native';
import styles from './style'
import { Button, TextInputField } from '../../components';
import { connect } from 'react-redux'
import { addTodoListRequest, updateItemRequest } from '../../redux/actions/AppActions'

const Add = (props) => {
    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            try {
                let data = props.state.app.detail.data
                setTitle(data.title)
                setDiscription(data.description)
                props.navigation.setOptions({ title: props.state.app.add.isEdit ? "Update" : 'Add' })
            } catch (e) {
                // error reading value
            }
        });
        return unsubscribe;
    }, [props.navigation]);

    const pressSubmit = () => {
        if (title === "" || discription == "") {
            alert("Title and discription is required")
        } else {
            const params = {
                title: title,
                description: discription,
            };
            if (props.state.app.add.isEdit) {
                let id = props.state.app.detail.data.id
                props.updateItemRequest({ navigation: props.navigation, body: params, id: id })
            } else {
                props.addTodoListRequest({ navigation: props.navigation, body: params })
            }
        }
    }

    let state = props.state.app.add
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
                <TextInputField
                    style={{ marginTop: '5%' }}
                    value={title}
                    title="What is to be done?"
                    placeholder="Title"
                    autoFocus={true}
                    onChangeText={text => setTitle(text)}
                />
                <TextInputField
                    style={{ marginTop: '5%', maxHeight: 100, }}
                    textContentType='none'
                    multiline={true}
                    value={discription}
                    placeholder="Discription"
                    title="Discription"
                    onChangeText={value => setDiscription(value)}
                />
                <Button text={state.isEdit ? "Update" : "Add"} style={styles.btn} onPress={() => pressSubmit()} />

            </View>

        </KeyboardAvoidingView>
    )
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
    addTodoListRequest: (data) => dispatch(addTodoListRequest(data)),
    updateItemRequest: (data) => dispatch(updateItemRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add)
