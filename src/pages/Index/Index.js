/* 首页 */
import React, { Component } from 'react';
import { Echarts, echarts } from 'react-native-secharts';
import { View, Text, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { Header, Body } from 'native-base';
import Layout from '../../constants/Layout';
import checkLogin from 'common/checkLogin';
import { getUserInfo } from 'actions/MainActions';
import { connect } from 'react-redux';

class Index extends React.Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    // header: null,    
    headerTitle: (
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          color: '#f3f3f3',
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
        待处理任务
      </Text>
    ),
    headerStyle: {
      // 改变页眉样式
      borderBottomWidth: 0,
      shadowOpacity: 0,
      backgroundColor: '#007f6f',
      height:50
    },
  });

  state = {
    // width: 0,
    height: 0,
    // modalVisible: false,
    banner: [banner, banner],
    // bottomCarouselList: [bannerB],
    // isV: true, // 判断小红点是否可见 --- 后面加多三个变量
  };
  // /*
  //  * 检查登陆状态
  //  * */
  // async checkLoginStatus() {
  //   const { navigation } = this.props;
  //   // const { dispatch } = this.props.navigation;
  //   const { dispatch } = this.props;
  //   let result = await checkLogin();
  //   if (result.is_login) {
  //     this.getDeviceInfo();
  //     // setTimeout(() => {
  //     //   this.setState({
  //     //     modalVisible: true
  //     //   });
  //     // }, 0);
  //     dispatch(getUserInfo(result.data));
  //   } else {
  //     return navigation.navigate('Login');
  //   }
  // }
  /*
   * 页面准备完成
   * */
  componentDidMount() {
    
  }
  componentWillUnmount() {

  }
  handleClick() {
    // this.setState({
    //   modalVisible: false,
    // });
  }
  //获取数据
  getData = () => {
    
  }
  //数据转换
  formatDate(day) {
    //定义一个日期对象;
    var currentTime=new Date(day);
    //获得系统星期几;
    var dayCycle=currentTime.getDay();
    //使用数组更改日期样式;
    var dayCycleArray=["日","一","二","三","四","五","六"];
    for(var i=0;i<7;i++){
      if(dayCycle==i){
        dayCycle=dayCycleArray[i];
      }
    }
    return "星期"+dayCycle;
  }
  getOption() {
    const option = {
      color: ['#00887A'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '25%',
        top: '10%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            lineStyle: {
              color: '#00887A', // 颜色
              width: 0, // 粗细
            },
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '金额（万元）',
          axisTick: {
            lineStyle: {
              color: '#00887A', // 颜色
              width: 0, // 粗细
            },
            alignWithLabel: true,
          },
        },
      ],
      series: [
        {
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 0, 0],
              label: {
                textStyle: {
                  //数值样式
                  color: 'black',
                },
                show: true,
                position: 'top',
              },
            },
          },
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    };
    return option;
  }
  render() {
    const { height } = this.state;
    // const { navigate, dispatch } = this.props.navigation;
    return (
      <View style={styles.index}>
        {/* <StatusBar
          hidden={true}
          backgroundColor={'#00887a'}
          barStyle={'light-content'}
        /> */}
          <View style={styles.indexTopView}>
            <View style={styles.indexView}>
              {
               (true? <Text style={[styles.textNum,styles.tac,styles.textNumCol1]}>0<Text style={styles.text}>个</Text></Text>:<Text style={[styles.textNum,styles.tac,styles.textNumCol2]}>0<Text style={styles.text}>个</Text></Text>)
              }
              <Text style={styles.tac}>订单待处理</Text>
            </View>
            <View style={styles.indexView}>
              {
               (false? <Text style={[styles.textNum,styles.tac,styles.textNumCol1]}>0<Text style={styles.text}>个</Text></Text>:<Text style={[styles.textNum,styles.tac,styles.textNumCol2]}>90<Text style={styles.text}>个</Text></Text>)
              }
              <Text style={styles.tac}>待发货</Text>
            </View>
            <View style={styles.indexView}>
              {
               (true? <Text style={[styles.textNum,styles.tac,styles.textNumCol1]}>0<Text style={styles.text}>个</Text></Text>:<Text style={[styles.textNum,styles.tac,styles.textNumCol2]}>0<Text style={styles.text}>个</Text></Text>)
              }
              <Text style={styles.tac}>物流费用</Text>
            </View>
            <View style={styles.indexView}>
              {
               (false? <Text style={[styles.textNum,styles.tac,styles.textNumCol1]}>0<Text style={styles.text}>个</Text></Text>:<Text style={[styles.textNum,styles.tac,styles.textNumCol2]}>45<Text style={styles.text}>个</Text></Text>)
              }
              <Text style={styles.tac}>确认收款</Text>
            </View>
            <View style={styles.indexView}>
              {
               (true? <Text style={[styles.textNum,styles.tac,styles.textNumCol1]}>0<Text style={styles.text}>个</Text></Text>:<Text style={[styles.textNum,styles.tac,styles.textNumCol2]}>0<Text style={styles.text}>个</Text></Text>)
              }
              <Text style={styles.tac}>退货/退款</Text>
            </View>
            <View style={styles.indexView}>
              {
               (true? <Text style={[styles.textNum,styles.tac,styles.textNumCol1]}>0<Text style={styles.text}>个</Text></Text>:<Text style={[styles.textNum,styles.tac,styles.textNumCol2]}>0<Text style={styles.text}>个</Text></Text>)
              }
              <Text style={styles.tac}>发货提醒</Text>
            </View>
          </View>
          <ImageBackground style={styles.echart} source={require('../../../static/index_echarts.png')} >
            <Text style={styles.padding}>最近一周收入：</Text>
            <View>
              <Echarts option={this.getOption()} height={400} />
            </View>
          </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  index: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  indexTopView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  padding:{
    paddingLeft:20,
    paddingTop:20,
  },
  tac: {
    textAlign: 'center'
  },
  indexView: {
    padding: 20,
    width: '33%',
  },
  textNum: {
    fontSize: 40
  },
  textNumCol1: {
    color: '#999999'
  },
  textNumCol2: {
    color: '#00887A'
  },
  text: {
    marginTop: 5,
    fontSize: 15
  },
  echart: {
    
  }
});
// const mapStateToProps = state => {
//   return {
//     userinfo: state.UserReducer.userinfo
//   };
// };
export default connect(
  // mapStateToProps,
  dispatch => {
    return {
      dispatch,
    };
  }
)(Index);
