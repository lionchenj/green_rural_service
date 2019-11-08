import {View, Text, StyleSheet, Image, TouchableHighlight} from "react-native";
import React from "react";

export default class LoanDetailsCom extends React.Component {
  /*
  * 实例化
  * */
  constructor(props){
    super(props)
    this.props = props;
    this.state = {
      width: 0,
      height: 0,
    }
  }
  /*
  * 页面 渲染
  * */
  render() {

    // 原图宽高
    let width = Image.resolveAssetSource(this.props.source).width;
    let height = Image.resolveAssetSource(this.props.source).height;

    // 显示宽高
    let _width = this.props.width;
    let _height = _width * (height / width)

    return (
      <Image style={[{width: _width,height: _height},this.props.style]} source={this.props.source} />
    )
  }

}
/*
* 样式
* */
const styles = StyleSheet.create({
  iconText: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  iconTextT: {
    color: '#383838'
  }
});
