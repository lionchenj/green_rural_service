import { View, StyleSheet, Text, Modal, Picker, Dimensions, TouchableHighlight } from "react-native";
import { Icon, Left} from 'native-base';
import React from "react";
import Layout from "../constants/Layout";
/*
* 静态图片
* */
// const cancel = require('../assets/imgs/icon/cancel.png');
const {width, height} = Dimensions.get('window');
export default class ModelPicker extends React.Component {

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
      brandList: [],
      modalVisible: false,
    }
  }
  /*
  * 页面 渲染
  * */
  render() {
      return (
        <Modal animationType='slide' transparent={true} visible={this.state.modalVisible} onRequestClose={this.setModalVisible}
        supportedOrientations ={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
        >
          <View style={styles.container}>
            <TouchableHighlight onPress={this.close} style={styles.mask}>
                <Text></Text>
            </TouchableHighlight>
            <View style={styles.body}>
                <View style={styles.boxtop}>
                <View>
                    <TouchableHighlight onPress={this.close}>
                    <Text style={{color:'red'}}>取消</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={{fontSize:18}}>选择物流商</Text>
                </View>
                <View>
                    <TouchableHighlight onPress={this.close}>
                    <Text>确认</Text>
                    </TouchableHighlight>
                </View>
                </View>
                <Picker
                selectedValue={this.state.language}
                style={{width: '100%'}}
                onValueChange={this.setPicker}>
                    {
                        this.state.brandList.map((item,i)=>{
                            return(
                                <Picker.Item label={item.name} value={item.name} />
                            )
                        })
                    }
                </Picker>
            </View>
          </View>
        </Modal>
      )
  }

  /*
  * 自定义方法
  *
  */
  //获取物流商
  getBrandList = () => {

  }
 setPicker = (itemValue, itemIndex) =>{
    this.props.brandname = itemValue;
  }
  show = () => {
    this.setState({
      modalVisible: true,
    })
  }
  close = () => {
    this.setState({
      modalVisible: false,
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
    width:'100%',
    height:'auto',
    position: "absolute",
    left: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  box: {
    zIndex:2,
    width:width,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor:'#ffffff',
  },
  boxtop: {
    padding:15,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center'
  }
});