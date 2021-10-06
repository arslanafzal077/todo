import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from '../Home/style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { fetchTodoListRequest } from '../../redux/actions/AppActions'
import Storage from '@utils/storage';

const Profile = (props) => {
  return (
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <TouchableOpacity
            onPress={() => {
              Storage.removeData('@token')
              props.navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
              });
            }}
            style={[styles.buttonStyle]}>
            <Icon name={'log-out'} size={100} color={'red'} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
              Logout
              </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}


const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  fetchTodoListRequest: (data) => dispatch(fetchTodoListRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
