import {View, Text, StyleSheet, Image, TouchableHighlight, Dimensions, Modal, TextInput } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
/*
* 静态图片
* */
// const cancel = require('../assets/imgs/icon/cancel.png');
const {width, height} = Dimensions.get('window');
export default class ModelView extends React.Component {

  props: {

  }

  /*
  * 实例化
  * */
  constructor(props){
    super(props)
    this.props = props;
    this.state = {
      num:'0',
      modalVisible: true,
    }
  }
  /*
  * 页面 渲染
  * */
  render() {
    if(this.props.type == 'jiage'){
      return (
        <Modal animationType='slide' transparent={true} visible={this.state.modalVisible} onRequestClose={this.setModalVisible}
        supportedOrientations ={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <View style={styles.container}>
            <TouchableHighlight onPress={this.setModalVisible} style={styles.mask}>
              <Text></Text>
            </TouchableHighlight>
            <View style={[styles.body]}>
              <View>
                <Image style={{width: 80, height: 80}} source={require('../../static/jiage.png')} />
              </View>
              <View style={[styles.content]}>
                <Text style={styles.name}>原价格：¥{this.props.picse}</Text>
              </View>
              <View style={styles.yunfei}>
                <TouchableHighlight onPress={this.up}>
                  <View >
                    <Image style={{width: 15, height: 15}} source={require('../../static/up.png')} />
                  </View>
                </TouchableHighlight>
                <View>
                  <TextInput style={styles.yunfeinum} textAlignVertical='center' autoComplete='cc-number' keyboardType='number-pad' value={this.state.num} onChangeText={text => setNum(text)} />
                </View>
                <TouchableHighlight onPress={this.down}>
                <View>
                  <Image style={{width: 15, height: 15}} source={require('../../static/down.png')} />                
                </View>
                </TouchableHighlight>
              </View>
              <View style={[styles.footer]}>
                <TouchableHighlight
                  underlayColor={'#fff'}
                  onPress={() => {
                    this.props.click();
                    this.setModalVisible()
                  }}
                >
                  <Text style={[styles.footerbtn2,{marginTop:20}]} >确认</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      )
    }
    if(this.props.type == 'yunfei'){
      return (
        <Modal animationType='slide' transparent={true} visible={this.state.modalVisible} onRequestClose={this.setModalVisible}
        supportedOrientations ={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <View style={styles.container}>
            <TouchableHighlight onPress={this.setModalVisible} style={styles.mask}>
              <Text></Text>
            </TouchableHighlight>
            <View style={[styles.body]}>
              <View>
                <Image style={{width: 100, height: 75}} source={require('../../static/yunfei.png')} />
              </View>
              <View style={[styles.content]}>
                <Text style={styles.name}>订单物流费用</Text>
              </View>
              <View style={styles.yunfei}>
                <TouchableHighlight onPress={this.up}>
                  <View >
                    <Image style={{width: 15, height: 15}} source={require('../../static/up.png')} />
                  </View>
                </TouchableHighlight>
                <View>
                  <TextInput style={styles.yunfeinum} textAlignVertical='center' autoComplete='cc-number' keyboardType='number-pad' value={this.state.num} onChangeText={text => setNum(text)} />
                </View>
                <TouchableHighlight onPress={this.down}>
                <View>
                  <Image style={{width: 15, height: 15}} source={require('../../static/down.png')} />                
                </View>
                </TouchableHighlight>
              </View>
              <View style={[styles.footer,{marginTop:20}]}>
                <TouchableHighlight
                  underlayColor={'#fff'}
                  onPress={() => {
                    this.props.click();
                    this.setModalVisible()
                  }}
                >
                  <Text style={[styles.footerbtn2]} >确认</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      )
    }
    if(this.props.type == 'pingzheng'){
      return (
        <Modal animationType='slide' transparent={true} visible={this.state.modalVisible} onRequestClose={this.setModalVisible}
        supportedOrientations ={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <View style={styles.container}>
            <TouchableHighlight onPress={this.setModalVisible} style={styles.mask}>
              <Text></Text>
            </TouchableHighlight>
            <View style={styles.pzImg}>
              <View>
                <Image style={{width: 190, height: 240}} source={require('../../static/wuliu.png')} />
              </View>
            </View>
          </View>
        </Modal>
      )
    }
    if(this.props.type == 'wuliu'){
      return (
        <Modal animationType='slide' transparent={true} visible={this.state.modalVisible} onRequestClose={this.setModalVisible}
        supportedOrientations ={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <View style={styles.container}>
            <TouchableHighlight onPress={this.setModalVisible} style={styles.mask}>
              <Text></Text>
            </TouchableHighlight>
            <View style={[styles.body]}>
              <View>
                <Image style={{width: 75, height: 75}} source={require('../../static/wuliu.png')} />
              </View>
              <View style={[styles.content]}>
                <Text style={styles.name}>送货人：{this.props.name}</Text>
                <Text style={styles.text}>联系电话：{this.props.name}</Text>
                <Text style={styles.text}>物流商户：{this.props.name}</Text>
                <Text style={styles.text}>运单号：{this.props.name}</Text>
              </View>
              <View style={[styles.footer]}>
                <TouchableHighlight
                  underlayColor={'#fff'}
                  onPress={() => {
                    this.props.click();
                    this.setModalVisible()
                  }}
                >
                  <Text style={[styles.footerbtn]} >确认</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      )
    }
    if(this.props.type == ''){
      return (<View></View>)
    }
  }

  /*
  * 自定义方法
  *
  */
  show(options) {
    console.log('options',options)
    this.setState({
      modalVisible: true,
    })
  }
  setModalVisible = () => {
    this.setState({
      modalVisible: false,
    })
  }
  setNum = (num) => {
    this.setState({
      num
    })
  }
  up = () => {
    let num = (this.state.num*1 + 1)+'';
    this.setState({
      num
    })
  }
  down = () => {
    let num = (this.state.num*1 - 1);
    if(num < 0){
      num = '0'
    }else{
      num = num+''
    }
    this.setState({
      num
    })
  }
}
/*
* 样式
* */
const styles = StyleSheet.create({
  container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'transparent',
      flex:1
  },
  mask: {
      justifyContent: "center",
      backgroundColor: "#383838",
      opacity: 0.8,
      position: "absolute",
      width: width,
      height: height,
      left: 0,
      top: 0,
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width:200,
    height:'auto',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
  content: {
    padding: 15
  },
  footer: {
    padding: 8,
    borderTopColor: '#00887A',
    textAlign: 'center'
  },
  footerbtn: {
    fontSize: 15,
    color:'#00887A'
  },
  footerbtn2: {
    fontSize: 20,
    color:'#00887A'
  },
  name: {
    fontSize: 20,
    color:'#00887A',
    fontFamily: 'PingFangSC-Semibold'
  },
  text: {
    marginTop:5,
    fontSize: 15,
    color:'#00887A'
  },
  pzImg: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width:200,
    height:250,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  yunfei: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  yunfeinum: {
    textAlign: 'center',
    width: 120,
    marginLeft:10,
    marginRight:10,
    borderTopColor: '#00887A',
    borderTopWidth:1,
    borderBottomColor: '#00887A',
    borderBottomWidth:1,
    borderLeftColor: '#00887A',
    borderLeftWidth:1,
    borderRightColor: '#00887A',
    borderRightWidth:1,
    padding:10,
    fontSize: 18,
    borderRadius: 25,
  }
});