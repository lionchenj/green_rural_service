import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text,FlatList,Image,Button,TouchableNativeFeedback,TextInput} from "react-native";
import { Container, Header, Item, Input, Icon, Tab, Tabs, TabHeading,Badge} from 'native-base';
import DeviceStorage from '../../storage/DeviceStorage'
import qs from 'qs';
class Login extends Component {
  state = {
    changeloginway:true,
    codenumber:'获取验证码',
    showpsw:false,
    loginforpsw:false,
    pswvalue:'',
    phonecode:'',
    phonenum:''
  };

  componentDidMount() {}

  // 获取验证码
  getphonecode = () => {
    console.log('进入验证码')
    // 禁止60s内重复获取验证码
    if(this.state.codenumber != '获取验证码'){
      alert('验证码获取中，请稍后再试')
      // Toast.info('',1.5);
      return false;
    }

    // // 验证手机号码填写是否合法
    if (!(/^1[3456789]\d{9}$/.test(this.state.phonenum))) {
      alert('手机号码有误，请重填')
      // Toast.info('手机号码有误，请重填',1.5);
      return false;
    }

    const params ={
      phone:this.state.phonenum
    } 
    console.log('手机号验证码均无问题，进入调用',JSON.stringify(params));
    let formData = new FormData();
    formData.append("phone", this.state.phonenum);

    // const httprequest = require("../../request/HttpRequest")
    // const res = httprequest.POST("http://47.112.118.25:9092/nongzi/app/authentication/verify-code",formData)
    // .then(res => {
    //   console.log(res);
    //   switch (res.errno) {
    //     case 0:
    //         alert('验证码发送中！')
    //         // Toast.success('验证码发送中！',1.5);
    //         var num = 60;
    //         var codesetinterval = setInterval((code) => {
    //             num --;
    //             this.setState({
    //                 codenumber : num
    //             });
    //             // console.log(this.state.codenumber,num)
    //             if(num == 0 ){
    //                 clearInterval(codesetinterval);
    //                 this.setState({
    //                     codenumber : '获取验证码'
    //                 });
    //             }
    //         },1000);
    //         break;
    //     default:
    //         // console.log(res);
    //         alert(res.errmsg)
    //         break;
    // }})

    fetch('http://47.112.118.25:9092/nongzi/authentication/verify-code', {
      method: 'POST',
      body: formData
    }).then(data => data.json()).then(res => {
      console.log(res);
      switch (res.errno) {
        case 0:
            alert('验证码发送中！')
            // Toast.success('验证码发送中！',1.5);
            var num = 60;
            var codesetinterval = setInterval((code) => {
                num --;
                this.setState({
                    codenumber : num
                });
                // console.log(this.state.codenumber,num)
                if(num == 0 ){
                    clearInterval(codesetinterval);
                    this.setState({
                        codenumber : '获取验证码'
                    });
                }
            },1000);
            break;
        default:
            // console.log(res);
            alert(res.errmsg)
            break;
    }
    }).catch(err =>{
      alert(err)
    })
    return;
}

  // 切换登录方式
  changeloginway=(e)=>{
    console.log(this.state.changeloginway)
    this.setState({
        changeloginway : !this.state.changeloginway
    });
  }

  // 显示/隐藏密码
  changeshowpsw=()=>{
    this.setState({
        showpsw: !this.state.showpsw
    })
  }

  // 输入密码
  iptpasswprd=(text)=>{
    //可以打印看看是否过滤掉了非数字
    console.log(text)
    this.setState({
        pswvalue:text
    })
  }

  // 输入手机号
  iptphonenum=(text)=>{
    const newText = text.replace(/[^\d]+/, '');
    //可以打印看看是否过滤掉了非数字
    console.log(newText)
    this.setState({
        phonenum:newText
    })
  }

  // 输入验证码
  iptphonecode=(text)=>{
    const newText = text.replace(/[^\d]+/, '');
    //可以打印看看是否过滤掉了非数字
    console.log(newText)
    this.setState({
        phonecode:newText
    })
  } 

  // 登录
  login = () => {
    console.log('登录接口')
    var pswvalue = this.state.pswvalue;
    var phonecode = this.state.phonecode;
    if(this.state.pswvalue == ''){
        pswvalue = null;
    }
    if(this.state.phonecode == ''){
        phonecode = null;
    }

    let formData = new FormData();
    if(this.state.changeloginway){
        if(phonecode == null){
          alert('请输入验证码');
            // Toast.info('请输入验证码!',1.5);
            return false;
        };
        formData.append("phone", this.state.phonenum);
        formData.append("code", this.state.phonecode);
    }
    if(!this.state.changeloginway){
        if(pswvalue == null){
          alert('请输入密码');
            // Toast.info('请输入密码!',1.5);
            return false;
        }
        formData.append("phone", this.state.phonenum);
        formData.append("password", this.state.pswvalue);
    }
    console.log(formData)
    
    fetch('http://47.112.118.25:9092/nongzi/authentication/login-app', {
      method: 'POST',
      body: formData
    }).then(data=>data.json()).then(res => {
      console.log(res);
      switch (res.errno) {
        case 0:
          console.log('登陆成功')
          DeviceStorage.save('token',res.data);
          setTimeout(()=>{
            this.props.navigation.navigate('Home');
          },1)
          break;
        default:
            alert(res.errmsg)
            console.log(res);
            break;
    }
    }).catch(err =>{
      alert(err)
    })
    return;
  }

  render(){
    return (
      <ScrollView>
          <View style={styles.loginView}>
              <Image style={styles.loginView_topImage} source={require('../../../static/images/loginimg.png')}/>
              <View style={styles.loginView_View}>
                  <Item style={styles.loginView_View_ipt}>
                      <Image style={styles.loginView_View_ipt_left} source={require('../../../static/images/loginphone.png')} alt=""/>
                      <TextInput style={{width:200}} keyboardType='numeric' placeholder='请输入手机号码' onChangeText={this.iptphonenum} value={this.state.phonenum}/>
                  </Item>
                  <Item style={styles.loginView_View_ipt}>
                      {this.state.changeloginway ? (
                          <Item style={styles.loginView_View_ipt_View}>
                              <Image style={styles.loginView_View_ipt_left} source={require("../../../static/images/logincode.png")} alt=""/>
                              <TextInput style={{width:200}} keyboardType='numeric' placeholder='请输入验证码' onChangeText={this.iptphonecode} value={this.state.phonecode}/>
                              <TouchableNativeFeedback onPress={this.getphonecode}>
                                <View style={styles.loginView_View_ipt_po} >
                                  <Text style={{lineHeight: 30,textAlign: "center"}}>
                                    {this.state.codenumber}
                                  </Text>
                                </View>
                              </TouchableNativeFeedback>
                          </Item>
                      ):(
                          <Item style={styles.loginView_View_ipt_View}>
                              <Image style={styles.loginView_View_ipt_left} source={require("../../../static/images/loginpsw.png")} alt=""/>
                              <TextInput style={{width:200}} keyboardType='numeric' password = {this.state.showpsw ? false : true} placeholder='输入密码' onChangeText={this.iptpasswprd} value={this.state.pswvalue}/>
                              <TouchableNativeFeedback onPress={this.changeshowpsw}>
                                <Image style={styles.loginView_View_ipt_right} source={this.state.showpsw ? require("../../../static/images/loginnumshow.png") : require("../../../static/images/loginnumhide.png")}/>
                              </TouchableNativeFeedback>
                          </Item>
                      )}
                  </Item>
                  {this.state.changeloginway ? (
                    <TouchableNativeFeedback  onPress={this.changeloginway}>
                      <View style={styles.loginView_View_Text} >
                        <Text style={{lineHeight:30}}>密码登录</Text>
                      </View>
                    </TouchableNativeFeedback>
                  ):(
                    <TouchableNativeFeedback  onPress={this.changeloginway}>
                      <View style={styles.loginView_View_Text}>
                        <Text style={{lineHeight:30}}>验证码登录</Text>
                      </View>
                    </TouchableNativeFeedback>
                  )}
              </View>
              <TouchableNativeFeedback onPress={this.login}>
                <View style={styles.loginbtn} >
                  <Text style={{textAlign:"center",lineHeight:40}}>
                    登 录
                  </Text>
                </View>
              </TouchableNativeFeedback>
          </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  loginView:{
    width: "100%"
  },
  loginView_topImage:{
      width: "100%",
      height: 275,
      marginBottom: 22.5,
  },
  loginView_View:{
      width: "100%",
      height: 180,
      padding: 15,
      position: "relative",
      marginBottom: 15,
  },
  loginView_View_ipt:{
      width: "100%",
      height: 65,
      justifyContent: 'flex-start',
      alignItems: "center",
      paddingTop: 17.5,
      // border-bottom: 1px #2ea996 solid,
      paddingLeft: 26
  },
  loginView_View_ipt_View:{
      width: "100%",
      height: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
  },
  loginView_View_ipt_left:{
      width: 20,
      height: 27,
      marginRight: 16,
  },
  loginView_View_ipt_Input:{
      width: 225,
      height: 29,
      color: "#333",
      fontSize: 13,
      marginRight: 16,
      backgroundColor: "#f3f3f3"
  },
  loginView_View_ipt_right:{
      width: 20,
      height: 15,
      marginLeft: 30,
      marginRight: 10,
  },
  loginView_View_Text:{
    marginTop:20,
    // width:100,
    position: "absolute",
    right: 16,
    bottom: 0,
    // backgroundColor:'#ccc',
    height: 30,
  },
  loginbtn:{
      // margin: 0 auto;
      height:40,
      textAlign:'center',
      lineHeight:40,
      width: "92%",
      backgroundColor: "#2ea996",
      borderRadius: 50,
      marginLeft:'4%'
      // paddingLeft:'4%'
  },
  loginView_View_ipt_po:{
      width: 95,
      height: 30,
      // border: 1px #2ea996 solid;
      borderRadius: 50,
      lineHeight: 30,
      textAlign: "center",
      marginRight: 10,
      borderWidth:1,
      borderColor:"#ccc"
  }
})

export default Login;