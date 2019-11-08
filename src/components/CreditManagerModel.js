import {View, Text, StyleSheet, Image, TouchableHighlight} from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import Modal from 'react-native-modal'
import {Body, CheckBox, ListItem} from 'native-base';
import {VModelList} from '../tools/Toast'
/*
* 静态图片
* */
// const cancel = require('../assets/imgs/icon/cancel.png');

export default class ModelView extends React.Component {

  props: {

  }

  /*
  * 实例化
  * */
  constructor(props){
    super(props)
    this.props = props;
    console.log(this.props);
    this.state = {
      modalVisible: true,
    }
  }
  /*
  * 页面 渲染
  * */
  render() {
    return (
        <Modal isVisible={this.state.modalVisible}>
          <View style={{ marginTop: 22,padding: 15}}>
            <View style={[styles.body]}>
              <View style={[styles.title]}>
                <Text style={[styles.titleText]}>
                  {this.props.title}
                </Text>
              </View>
              <View style={[styles.content]}>
                <ListItem>
                  <Body>
                  <Text style={{fontSize: 20}}>123</Text>
                  </Body>
                  <CheckBox
                    checked={true}
                    color="green"
                    onPress={() => {
                      // this.selectAction(item)
                    }}
                  />
                </ListItem>
                {/*<Text>*/}
                  {/*{this.props.content}*/}
                {/*</Text>*/}
              </View>
              <View style={[styles.footer]}>
                <TouchableHighlight
                  underlayColor={'#fff'}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text>取消</Text>
                  {/*<Image source={cancel} style={[styles.footerIcon]} />*/}
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
    )
  }

  /*
  * 自定义方法
  * checkLocation 点击查看地图位置
  * showStar 判断是否显示距离
  *
  * */

  setModalVisible = () => {
    this.setState({
      modalVisible: false,
    })
    VModelList.hide();
  }

}
/*
* 样式
* */
const styles = StyleSheet.create({
  itemBox: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    padding: 8
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
    borderTopColor: '#e4e4e4',
    borderTopWidth: 1,
  },
  footerIcon: {
    width: 34,
    height: 32,
    alignSelf: 'center'
  },
});
