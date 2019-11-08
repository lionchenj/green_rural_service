/* 个人中心 */
import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Storage from "storage/storage";
import Header from "components/Header";
import { img_domain } from "common/url";

class UserCenter extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Text style={{ flex: 1, textAlign: 'center', color: '#f3f3f3',fontSize: 16, fontWeight: 'bold', }}>个人中心</Text>
    ),
    headerStyle: { // 改变页眉样式
      borderBottomWidth: 0,
      shadowOpacity: 0,
      backgroundColor: '#007f6f'
    }
  });

  state = {};
  switchPath([pageName]) {
    const { navigation } = this.props;
    navigation.navigate(pageName);
    // console.log("pageName:", pageName);
  }
  logout() {
    Storage.delete("user_info");
    const { navigation } = this.props;
    navigation.navigate("Login");
  }
  render() {
    const { userinfo } = this.props;
    return (
      <View style={styles.user}>
        <StatusBar hidden={true} backgroundColor={"#00887a"} barStyle={"light-content"} />
        <View style={styles.main}>
          <ImageBackground style={styles.user_bgi} source={require("static/images/usercenter_bgi.png")}>
            <View style={[styles.user_bgi_container]}>
              <View style={styles.user_left_box}>
                <Image
                  style={styles.user_avatar}
                  source={userinfo.head ? { uri: img_domain + userinfo.head } : require("static/images/icon_avatar.png")}
                />
              </View>
              <View style={styles.user_center_box}>
                <Text style={styles.text_height}>{userinfo.name}</Text>
                <Text style={styles.text_normal}>{userinfo.orgName}</Text>
                {/* <Text style={styles.text_normal}>{userinfo.phone}</Text> */}
              </View>
              {/* <View style={styles.user_right_box}>
              <Image style={styles.right_arrow} source={require("static/images/right_arrow.png")} />
            </View> */}
            </View>
          </ImageBackground>
          <View style={styles.buttons_box}>
            <TouchableOpacity onPress={this.switchPath.bind(this, ["ChangePassword"])} style={[styles.button, {}]}>
              <Image source={require("static/images/key.png")} style={styles.button_image} />
              <Text style={styles.text}>修改密码</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logout.bind(this)} style={[styles.button, { marginTop: 30 }]}>
              <Image source={require("static/images/backdoor.png")} style={styles.button_image} />
              <Text style={styles.text}>退出登录</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.user_operate_box}>
            <View style={styles.user_operate_item}>
              <Image style={styles.operate_item_icon} source={require("static/images/user_center_icons_1.png")} />
              <Text style={[styles.text_normal, { flex: 1 }]}>版本信息</Text>
              <TouchableOpacity style={styles.item_right_box}>
                <Image style={styles.operate_item_go} source={require("static/images/right_arrow_black.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.user_operate_item}>
              <Image style={styles.operate_item_icon} source={require("static/images/user_center_icons_2.png")} />
              <Text style={[styles.text_normal, { flex: 1 }]}>设置</Text>
              <TouchableOpacity style={styles.item_right_box}>
                <Image style={styles.operate_item_go} source={require("static/images/right_arrow_black.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.user_operate_item}>
              <Image style={styles.operate_item_icon} source={require("static/images/user_center_icons_3.png")} />
              <Text style={[styles.text_normal, { flex: 1 }]}>关于绿田园</Text>
              <TouchableOpacity style={styles.item_right_box}>
                <Image style={styles.operate_item_go} source={require("static/images/right_arrow_black.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.user_operate_item}>
              <Image style={styles.operate_item_icon} source={require("static/images/user_center_icons_4.png")} />
              <Text style={[styles.text_normal, { flex: 1 }]}>签到</Text>
              <TouchableOpacity style={styles.item_right_box}>
                <Image style={styles.operate_item_go} source={require("static/images/right_arrow_black.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.user_operate_item}>
              <Image style={styles.operate_item_icon} source={require("static/images/user_center_icons_5.png")} />
              <Text style={[styles.text_normal, { flex: 1 }]}>修改密码</Text>
              <TouchableOpacity onPress={this.switchPath.bind(this, ["ChangePassword"])} style={styles.item_right_box}>
                <Image style={styles.operate_item_go} source={require("static/images/right_arrow_black.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.user_operate_item}>
              <Image style={styles.operate_item_icon} source={require("static/images/user_center_icons_5.png")} />
              <Text style={[styles.text_normal, { flex: 1 }]}>退出登录</Text>
              <TouchableOpacity onPress={this.logout.bind(this)} style={styles.item_right_box}>
                <Image style={styles.operate_item_go} source={require("static/images/right_arrow_black.png")} />
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  user_bgi_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    resizeMode: "contain",
    paddingHorizontal: 20,
    width: "100%",
    flex: 1
  },
  button_image: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain"
  },
  item_right_box: {
    width: 60,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  operate_item_icon: {
    width: 35,
    height: 35,
    resizeMode: "cover",
    marginRight: 12
  },
  operate_item_go: {
    height: 30,
    width: 16,
    resizeMode: "contain",
    position: "absolute",
    right: 0
  },
  user_operate_box: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 0,
    paddingBottom: 25,
    marginTop: 15,
    backgroundColor: "#fff"
  },
  user_operate_item: {
    height: 60,
    borderBottomColor: "#b2b2b2",
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
    // justifyContent: "center"
  },
  user: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f6f9",
    display: "flex"
  },
  title_box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#00887a"
  },
  title: {
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "center"
    // textAlign: "center"
  },
  main: {
    flex: 1,
    width: "100%"
  },
  user_bgi: {
    width: "100%",
    height: 170,
    display: "flex"
  },
  user_left_box: {
    width: 90,
    height: 90,
    overflow: "hidden",
    borderRadius: 50
  },
  user_center_box: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 35,
    paddingHorizontal: 25
  },
  user_right_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text_height: {
    fontSize: 20,
    marginBottom: 6,
    color: "#343132"
  },
  text_normal: {
    fontSize: 15,
    color: "#343132"
  },
  right_arrow: {
    width: 15,
    height: 20,
    resizeMode: "contain"
  },
  user_avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  user_name: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
    color: "#fff"
  },
  buttons_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#fff",
    height: 300
  },
  button: {
    width: "80%",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2da995",
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff"
  }
});

const mapStateToProps = state => {
  return {
    userinfo: state.UserReducer.userinfo
  };
};

export default connect(mapStateToProps)(UserCenter);
