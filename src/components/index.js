/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

let { width, height } = Dimensions.get('window')
export const TextInputField = ({
  name,
  value,
  onChangeText,
  type,
  placeholder,
  style,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  textContentType,
  title,
  multiline,
  editable=true,
  autoFocus=false
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.LoginTextField}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType ? textContentType : 'none'}
        value={value}
        onChangeText={onChangeText}
        type={type}
        editable={editable}
        autoFocus={autoFocus}
        multiline={multiline}
        autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        keyboardType={keyboardType}
        placeholderTextColor="grey"
        placeholder={placeholder ? placeholder : name}
      />
    </View>
  );
};

export const Button = ({ text, onPress, titleStyle, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={[styles.btnText, titleStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};
export const FloatButton = ({ text, onPress, titleStyle, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnFloat, style]}>
      <Icon name={'add'} size={50} color={'white'} />
    </TouchableOpacity>
  );
};
export const RadioButton = props => {
  return (
    <TouchableOpacity style={styles.btnRadio} activeOpacity={1} onPress={props.onPress}>
      <View style={styles.circle} >
        {props.checked ? (<View style={styles.checkedCircle} />) : (<View />)}
      </View>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
};

export const ListItem = ({ title, discription, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.listItem, style]}>
      <Text style={[styles.listTitle]}>{title}</Text>
      <Text style={[styles.detail]}>{discription}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: '5%',
    width: "90%",
  },
  LoginTextField: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    color: 'grey',
    paddingBottom: 0,
    paddingTop: 0,
  },
  title: {
    color: '#02a5f7'
  }
  ,
  btn: {
    backgroundColor: '#02a5f7',
    width: '90%',
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerInline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '80',

  },
  labelTextInline: {
    color: '#21034f',
    fontSize: 14,
    marginBottom: 0,
    fontWeight: '400',
    width: '30%',
  },
  DropDownFieldInline: {
    width: '70%',
  },
  DatePicker: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  fontWhite: {
    color: '#8b8fa0',
    width: "45%"
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center", // To center the checked circle…
    justifyContent: "center",
    marginHorizontal: 10
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#131313" // You can set it default or with yours one…
  },
  btnRadio: {
    flexDirection: 'row',
    marginVertical: '1%'
  },
  listItem: {
    // alignItems:'-start',
    justifyContent: 'flex-start',
    paddingVertical: 10
  },
  listTitle: {
    width: width - 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
  detail: {
    width: width - 40
  },
  btnFloat: {
    position: 'absolute',
    backgroundColor: '#02a5f7',
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom:10,
    right:20,
    alignItems:'center',
    justifyContent:'center'
  }
});
