/* 修改密码 */
import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { POST } from "common/request";
import { domain } from "common/url";
import Header from "components/Header";
class ChangePassword extends Component {
  state = {
    is_on_eye: false,
    origin_password: "",
    new_password: "",
    comfire_new_password: ""
  };
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  handleChangeEye() {
    this.setState({
      is_on_eye: !this.state.is_on_eye
    });
  }
  handleNewPassword = text =>
    this.setState({
      new_password: text
    });
  handleOriginPassword = text =>
    this.setState({
      origin_password: text
    });
  handlePassword = text =>
    this.setState({
      comfire_new_password: text
    });
  async handleSubmit() {
    const { origin_password, new_password, comfire_new_password } = this.state;
    const { navigation } = this.props;
    if (new_password !== comfire_new_password) {
      return alert("两次输入的密码不一致");
    }
    if (new_password == "" || comfire_new_password == "") {
      return alert("密码输入不能为空");
    }
    const { userinfo } = this.props;
    console.log(origin_password, new_password, comfire_new_password, userinfo);
    let params = {
      oldPassword: origin_password,
      newPassword: new_password
    };
    let result = await POST(
      domain,
      JSON.stringify({
        method: "user_updatePasswordById",
        params,
        header: {
          name: "sToken",
          value: userinfo.sToken
        }
      })
    );
    console.log("修改密码", result);
    if (result.code == 200 && result.msg == "密码错误") {
      alert("原密码错误！");
    } else {
      alert("成功修改密码");
      navigation.navigate("Login");
    }
  }
  render() {
    const { origin_password, new_password, comfire_new_password, is_on_eye } = this.state;
    const { navigate, dispatch } = this.props.navigation;
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.change_password}>
        <Header title='修改密码' back={true} navigation={navigation} />
        <View style={styles.main}>
          <View style={styles.user_box}>
            <View style={[styles.input, { marginTop: 40 }]}>
              <TextInput
                style={styles.username_input}
                placeholder='请输入原密码'
                placeholderTextColor='#999999'
                underlineColorAndroid='transparent'
                secureTextEntry={!is_on_eye}
                onChangeText={this.handleOriginPassword.bind(this)}
              />
              <TouchableOpacity onPress={this.handleChangeEye.bind(this)}>
                {is_on_eye ? (
                  <Image style={styles.eye} source={require("static/images/icon_unblind.png")} />
                ) : (
                  <Image style={styles.eye} source={require("static/images/iocn_blind.png")} />
                )}
              </TouchableOpacity>
            </View>
            <View style={[styles.input, { marginTop: 15 }]}>
              <TextInput
                style={styles.password_input}
                placeholder='请输入新密码'
                placeholderTextColor='#999999'
                underlineColorAndroid='transparent'
                secureTextEntry={!is_on_eye}
                onChangeText={this.handleNewPassword.bind(this)}
              />
              <TouchableOpacity onPress={this.handleChangeEye.bind(this)}>
                {is_on_eye ? (
                  <Image style={styles.eye} source={require("static/images/icon_unblind.png")} />
                ) : (
                  <Image style={styles.eye} source={require("static/images/iocn_blind.png")} />
                )}
              </TouchableOpacity>
            </View>
            <View style={[styles.input, { marginTop: 15 }]}>
              <TextInput
                style={styles.password_input}
                placeholder='确认新密码'
                placeholderTextColor='#999999'
                underlineColorAndroid='transparent'
                secureTextEntry={!is_on_eye}
                onChangeText={this.handlePassword.bind(this)}
              />
              <TouchableOpacity onPress={this.handleChangeEye.bind(this)}>
                {is_on_eye ? (
                  <Image style={styles.eye} source={require("static/images/icon_unblind.png")} />
                ) : (
                  <Image style={styles.eye} source={require("static/images/iocn_blind.png")} />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.warn}>*密码长度8-32位，必须包含数字、字母、符号至少2种或以上元素</Text>
            <Button
              containerStyle={{ width: "100%", marginTop: 35 }}
              buttonStyle={[
                {
                  borderRadius: 8,
                  backgroundColor: is_on_eye
                    ? "#A5E8D0"
                    : origin_password !== "" && new_password !== "" && comfire_new_password !== ""
                    ? "#A5E8D0"
                    : "#00887a"
                }
              ]}
              textStyle={{ width: "100%", color: "#fff", textAlign: "center" }}
              title='确认修改'
              onPress={this.handleSubmit.bind(this)}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  change_password: {
    backgroundColor: "#E9F9DB"
  },
  title_box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#00887a",
    position: "relative"
  },
  back_box: {
    width: 12,
    height: 12,
    position: "absolute",
    left: 15
  },
  back: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  title: {
    color: "#fff",
    fontSize: 16
  },

  main: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: 0,
    backgroundColor: "transparent"
  },
  user_box: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    paddingBottom: 35,
    backgroundColor: "transparent",
    borderRadius: 25
  },
  user_avatar: {
    width: 85,
    height: 85,
    marginTop: 40
    // backgroundColor: "#E9F9DB",
    // borderColor: "#7EA66E",
    // borderWidth: 1
  },
  des: {
    fontSize: 16,
    color: "#6E9462",
    marginTop: 12
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomColor: "#e7e7e7",
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row"
  },
  username_input: {
    width: "90%",
    padding: 0
  },
  password_input: {
    width: "90%",
    padding: 0
  },
  eye: {
    width: 15,
    height: 15,
    resizeMode: "contain"
  },
  submit: {
    width: "90%",
    marginTop: 50,
    height: 36,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  warn: {
    marginTop: 20,
    fontSize: 12,
    color: "#666666",
    fontFamily: "PingFangSC-Medium"
  }
});

const mapStateToProps = state => {
  return {
    userinfo: state.UserReducer.userinfo
  };
};
export default connect(mapStateToProps)(ChangePassword);
