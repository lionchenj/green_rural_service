import {View, Text, StyleSheet, Image, TouchableHighlight, TextInput} from "react-native";
import React from "react";
import {Icon} from "native-base";
import Layout from "../constants/Layout";


export default class SearchBarCom extends React.Component {

  props: {
    id: null,
    btnText: 'fail',
    haveDistance: false,
    distance: 400,
    title: '一起去看雷阵雨',
    placeholder: ''
  }

  /*
  * 实例化
  * */
  constructor(props){
    super(props)
    this.props = props;
    this.state = {
      InputHaveValue: false, // 搜索bar是否存在值
    }
  }
  /*
  * 页面 渲染
  * */
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarInput}
          placeholder={this.props.placeholder}
          placeholderTextColor={'#ddd'}
          onChangeText={this.searchBarValueChange}
          onBlur={this.searchBarAction}
        />
        {/*{this.state.InputHaveValue?null:<Icon style={[styles.searchBarIcon]} name="ios-search" />}*/}
      </View>
    )
  }

  /*
  * 自定义方法
  * searchBarValueChange 搜索输入框值改变
  * */

  // 搜索输入框值改变
  searchBarValueChange = (text) => {
    if (text) {
      this.setState({
        InputHaveValue: true,
      })
    } else {
      this.setState({
        InputHaveValue: false,
      })
    }
    this.props.onChangeText(text)
  }

  searchBarAction = (text) => {
    this.props.onBlur(text)
  }

}
/*
* 样式
* */
const styles = StyleSheet.create({
  searchBar: {
    width: Layout.window.width,
    height: 60,
    padding: 12,
    backgroundColor: '#38a890',
    position: 'relative'
  },
  searchBarInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 18,
    borderRadius: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 15,
    paddingLeft: 15,
  },
  searchBarIcon: {
    position: 'absolute',
    top: 18,
    left: '50%',
    color: '#ddd',
    fontSize: 24,
    marginLeft: -30,
  }
});
