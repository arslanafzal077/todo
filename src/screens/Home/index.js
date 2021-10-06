import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text
} from 'react-native'
import styles from './style'
import { FloatButton, ListItem } from '../../components';
import { connect } from 'react-redux'
import { fetchTodoListRequest, fetchItemDetailRequest,setStatusForEdit,itemDetailSuccess } from '../../redux/actions/AppActions'

const renderSeparator = () => (
  <View
    style={{
      backgroundColor: 'black',
      height: 0.5,
    }}
  />
);

const renderListEmptyComponent = () => (
  <Text
    style={{
      marginTop: 10,
    }}
  >Please Click on + to add items </Text>
);


const Home = (props) => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      try {
        props.fetchTodoListRequest({ navigation: props.navigation })
      } catch (e) {
        // error reading value
      }
    });
    return unsubscribe;
  }, [props.navigation]);

  const onItemPress = (item) => {
    let id = item.id
    props.fetchItemDetailRequest({ navigation: props.navigation, id: id })
    props.navigation.navigate('Detail')
  }

  
  let state = props.state.app.home
  return (
    <SafeAreaView style={styles.SafeAreaView2}>
      <View style={styles.outerWrapper}>
        <FlatList
          data={state.data}
          refreshing={state.isLoading}
          onRefresh={() => { props.fetchTodoListRequest({ navigation: props.navigation }) }}
          renderItem={({ item, index }) =>
              <ListItem
                title={item.title}
                discription={item.description}
                onPress={() => { onItemPress(item) }}
              />}
          ItemSeparatorComponent={renderSeparator}
          ListEmptyComponent={renderListEmptyComponent}
          keyExtractor={(item) => item.id}
        />
      </View>
      <FloatButton onPress={() => {
        props.setStatusForEdit(false)
        props.itemDetailSuccess({})
        props.navigation.navigate('Add')
      }} />
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  fetchTodoListRequest: (data) => dispatch(fetchTodoListRequest(data)),
  fetchItemDetailRequest: (data) => dispatch(fetchItemDetailRequest(data)),
  itemDetailSuccess: (data) => dispatch(itemDetailSuccess(data)),
  setStatusForEdit: (status) => dispatch(setStatusForEdit(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
