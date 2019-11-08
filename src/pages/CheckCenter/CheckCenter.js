/* 信贷中心 */
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Modal,
  RefreshControl,
  KeyboardAvoidingView,
  Platform, findNodeHandle,
} from 'react-native';
import { connect } from "react-redux";
import { DatePicker } from "native-base";
import { setCheckCenterData, updateCheckCenterData } from "actions/MainActions";
import List from "../../components/List";
import { POST } from "common/request";
import { domain } from "common/url";
import Header from "components/Header";
// import{UIManager}from'NativeModules'

let is_ios;
if (Platform.OS == "ios") {
  is_ios = true;
} else {
  is_ios = false;
}
class CheckCenter extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Text style={{ flex: 1, textAlign: 'center', color: '#f3f3f3',fontSize: 16, fontWeight: 'bold', }}>信贷中心</Text>
    ),
    headerStyle: { // 改变页眉样式
      borderBottomWidth: 0,
      shadowOpacity: 0,
      backgroundColor: '#007f6f'
    }
  });
  statusView; // 选择状态组件


  /*
* 实例化
* */
  constructor(props){
    super(props)
    this.props = props;
    const inStatusList = this.props.navigation.state.params ? this.props.navigation.state.params.inStatusLis : [4,5,6,7,8];
    this.state = {
      is_show_placeholder: true,
      device: {
        width: 0,
        height: 0
      },
      modalVisible: false,
      modalVisible_money: false,
      modalVisible_status: false,
      startDate: "", // 选择开始时间
      endDate: "",
      startMoney: "",
      endMoney: "",
      name: '',
      refreshing: false,
      pageNum: 1,
      pageSize: 10,
      inStatusList: inStatusList,
      //分页数据  接口返回
      page: {
        nextPage: 1,
        pageNum: 1,
        pageSize: 10,
        plainPageNum: 1,
        prePage: 1,
        totalPage: 1,
        totalRow: 3
      },
      statusHeight: 130, // 状态选择位置 Y坐标
    }
  }

  handleFocus() {
    this.setState({
      is_show_placeholder: false
    });
  }
  handleBlur() {
    const { name } = this.state;
    if (name == "") {
      this.setState({
        is_show_placeholder: true
      });
      this.getHomeData();
    } else {
      this.getSearch();
    }
  }
  async getSearch() {
    this.setState(
      {
        startDate: "",
        endDate: "",
        startMoney: "",
        endMoney: "",
        // name: '',
        pageNum: 1,
        pageSize: 10,
        inStatusList: this.state.inStatusList
      },
      async () => {
        const { name, pageNum, pageSize } = this.state;
        const { dispatch, userinfo } = this.props;
        let result = await POST(
          domain,
          JSON.stringify({
            method: "userLoan_page",
            params: {
              name: name,
              pageNum,
              pageSize
            },
            header: {
              name: "sToken",
              value: userinfo.sToken
            }
          })
        );
        console.log(result);
        console.log("search:", result);
        if (result.code == 200) {
          dispatch(setCheckCenterData(result.data));
          this.setState({
            page: result.page
          });
        } else {
          alert(result.msg);
        }
      }
    );
  }
  handleChange(text) {
    this.setState(
      {
        name: text
      },
      // () => {
      //   if (this.state.name !== "") {
      //     this.getSearch();
      //   } else {
      //     this.getHomeData();
      //   }
      // }
    );
  }
  async getHomeData() {
    const { dispatch, userinfo } = this.props;
    const _this = this;
    this.setState(
      {
        startDate: "",
        endDate: "",
        startMoney: "",
        endMoney: "",
        name: '',
        pageNum: 1,
        pageSize: 10,
        is_show_placeholder: true,
        inStatusList: this.state.inStatusList
      },
      async () => {
        const { pageNum, pageSize, inStatusList } = this.state;
        let result = await POST(
          domain,
          JSON.stringify({
            method: "userLoan_page",
            params: {
              inStatusList,
              pageNum,
              pageSize
            },
            header: {
              name: "sToken",
              value: userinfo.sToken
            }
          })
        );
        console.log("checkCenter:", result);
        if (result.code == 200) {
          dispatch(setCheckCenterData(result.data));
          this.setState({
            page: result.page
          });
        } else {
          alert(result.msg);
        }
      }
    );
  }
  getDevice() {
    const { width, height } = Dimensions.get("window");
    this.setState({
      width,
      height
    });
  }
  setEarlyDate(newDate) {
    this.setState({ startDate: newDate });
  }
  setLateDate(newDate) {
    this.setState({ endDate: newDate });
  }
  clickTime() {
    this.setState({ modalVisible: true });
  }
  clickCoin() {
    this.setState({
      modalVisible_money: true
    });
  }
  // 打开状态选择
  clickStatus() {
    this.setState({
      modalVisible_status: true
    });
    // 设置 选项在页面的位置
    this.statusView.measure((x,y,width,height,pageX,pageY) => {
      console.log(x,y,width,height,pageX,pageY);
      this.setState({
        statusHeight: pageY+40,
      })
    });
  }
  handleCancel() {
    this.setState({
      modalVisible: false
    });
  }
  async handleSubmit() {
    this.setState(
      {
        startMoney: "",
        endMoney: "",
        pageNum: 1,
        pageSize: 10,
        name: "",
        is_show_placeholder: true,
        inStatusList: this.state.inStatusList
      },
      async () => {
        let { startDate, endDate, pageNum, pageSize } = this.state;
        if (startDate == "") return;
        startDate =
          new Date(startDate).getFullYear() + "-" + (parseInt(new Date(startDate).getMonth()) + 1) + "-" + new Date(startDate).getDate();
        endDate =
          new Date(endDate).getFullYear() + "-" + (parseInt(new Date(endDate).getMonth()) + 1) + "-" + new Date(endDate).getDate();
        // alert();
        const _this = this;
        const { userinfo, dispatch } = this.props;
        let params = {
          endDate,
          startDate,
          pageNum,
          pageSize
        };
        let result = await POST(
          domain,
          JSON.stringify({
            method: "userLoan_page",
            params,
            header: {
              name: "sToken",
              value: userinfo.sToken
            }
          })
        );
        console.log("time", result);
        if (result.code == 200) {
          dispatch(setCheckCenterData(result.data));
          _this.setState(() => {
            return {
              modalVisible: false,
              page: result.page
            };
          });
        } else {
          alert(result.msg);
        }
      }
    );
  }
  handleStartMoney(text) {
    if (/^[0-9]*$/.test(text)) {
      this.setState({
        startMoney: text.toString()
      });
    }
  }
  handleEndMoney(text) {
    if (/^[0-9]*$/.test(text)) {
      this.setState({
        endMoney: text.toString()
      });
    }
  }
  async handleSubmitMoney() {
    this.setState(
      {
        startDate: "",
        endDate: "",
        pageNum: 1,
        pageSize: 10,
        name: "",
        is_show_placeholder: true,
        inStatusList: this.state.inStatusList
      },
      async () => {
        const { startMoney, endMoney, pageNum, pageSize } = this.state;
        if (startMoney == "") return;
        const { dispatch, userinfo } = this.props;
        const _this = this;
        let params = {
          startApplicationAmount: parseInt(startMoney),
          endApplicationAmount: parseInt(endMoney),
          pageNum,
          pageSize
        };
        let result = await POST(
          domain,
          JSON.stringify({
            method: "userLoan_page",
            params,
            header: {
              name: "sToken",
              value: userinfo.sToken
            }
          })
        );
        console.log("money", result);
        if (result.code == 200) {
          dispatch(setCheckCenterData(result.data));
          _this.setState({ modalVisible_money: false, page: result.page });
        } else {
          alert(result.msg);
        }
      }
    );
  }
  async handleStatusItems([type]) {
    console.log([type]);
    console.log(type);
    console.log(this.state.inStatusList);
    this.setState(
      {
        startDate: "",
        endDate: "",
        startMoney: "",
        endMoney: "",
        pageNum: 1,
        pageSize: 10,
        name: "",
        is_show_placeholder: true,
        inStatusList: type ? [type] : [4,5,6,7,8]
      },
      async () => {
        const _this = this;
        const { dispatch, userinfo } = this.props;
        const { pageNum, pageSize, inStatusList } = this.state;
        let params = {
          pageNum,
          pageSize,
          inStatusList
        };
        let result = await POST(
          domain,
          JSON.stringify({
            method: "userLoan_page",
            params,
            header: {
              name: "sToken",
              value: userinfo.sToken
            }
          })
        );
        console.log("status", result);
        if (result.code == 200) {
          dispatch(setCheckCenterData(result.data));
          _this.setState(() => {
            return {
              modalVisible_status: false,
              page: result.page
            };
          });
        } else {
          alert(result.msg);
        }
      }
    );
  }
  _onRefresh() {
    this.setState(() => ({
      refreshing: true
    }));
    this.getHomeData();
    this.setState(() => ({
      refreshing: false
    }));
  }
  //上拉加载
  handleScrollEnd = event => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;
    const isEndReached = scrollOffset + scrollViewHeight >= contentHeight; // 是否滑动到底部
    const isContentFillPage = contentHeight >= scrollViewHeight; //
    const { page, pageNum } = this.state;
    if (isContentFillPage && isEndReached) {
      if (pageNum >= page.nextPage) return;
      this.loadMoreData();
    }
  };
  async loadMoreData() {
    this.setState(
      {
        pageNum: this.state.pageNum + 1
      },
      async () => {
        const { startDate, endDate, startMoney, endMoney, pageNum, pageSize, inStatusList, name } = this.state;
        const { dispatch, userinfo } = this.props;
        let _params = {
          pageSize,
          pageNum
        };
        if (startDate !== "" && endDate !== "") {
          // let startDate = new Date(startDate).toLocaleDateString().replace(/\//g, "-");
          // let endDate = new Date(endDate).toLocaleDateString().replace(/\//g, "-");
          let startDate =
            new Date(startDate).getFullYear() +
            "-" +
            (parseInt(new Date(startDate).getMonth()) + 1) +
            "-" +
            new Date(startDate).getDate();
          let endDate =
            new Date(endDate).getFullYear() + "-" + (parseInt(new Date(endDate).getMonth()) + 1) + "-" + new Date(endDate).getDate();
          _params = {
            ..._params,
            endDate,
            startDate
          };
        }
        if (startMoney !== "" && endMoney !== "") {
          _params = {
            ..._params,
            startApplicationAmount: parseInt(startMoney),
            endApplicationAmount: parseInt(endMoney)
          };
        }
        if (inStatusList.length > 0) {
          _params = {
            ..._params,
            inStatusList
          };
        }
        if (name !== "") {
          _params = {
            ..._params,
            name
          };
        }
        console.log("loadmore:", _params);
        let result = await POST(
          domain,
          JSON.stringify({
            method: "userLoan_page",
            params: _params,
            header: {
              name: "sToken",
              value: userinfo.sToken
            }
          })
        );
        console.log("loadmore:", result);
        if (result.code == 200) {
          dispatch(updateCheckCenterData(result.data));
        } else {
          alert(result.msg);
        }
      }
    );
  }
  componentDidMount() {
    this.getHomeData();
    this.getDevice();


  }
  render() {
    const { name, is_show_placeholder, startDate, endDate, startMoney, endMoney, device } = this.state;
    const { data, navigation } = this.props;
    const { navigate, dispatch } = this.props.navigation;
    const { width, height, refreshing } = this.state;
    return (
      <View style={styles.check_center}>
        <View style={styles.fixed_box}>
          <View style={styles.search_box}>
            <TextInput
              style={styles.search_area}
              onBlur={this.handleBlur.bind(this)}
              onFocus={this.handleFocus.bind(this)}
              onChangeText={this.handleChange.bind(this)}
              value={this.state.name}
              underlineColorAndroid='transparent'
              placeholder=''
            />
            {this.state.name == "" ? (
              <View style={styles.placeholder_box}>
                <Image style={styles.placeholder_icon} source={require("static/images/Shape.png")} />
                <Text style={styles.placeholder_text}>借款人姓名</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.search_type} ref={statusView => this.statusView = statusView}>
            <TouchableOpacity onPress={this.clickTime.bind(this)} style={styles.search_type_item}>
              <Text style={styles.search_type_item_text}>申请时间</Text>
              <Image style={[styles.search_type_item_img, { width: 17 }]} source={require("static/images/icon_time.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickCoin.bind(this)} style={styles.search_type_item}>
              <Text style={styles.search_type_item_text}>金额</Text>
              <Image style={styles.search_type_item_img} source={require("static/images/icon_coin.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickStatus.bind(this)} style={styles.search_type_item}>
              <Text style={styles.search_type_item_text}>状态</Text>
              <Image style={styles.search_type_item_img} source={require("static/images/icon_status.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.list_box}
          onScrollEndDrag={this.handleScrollEnd.bind(this)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              colors={["#00887a"]}
              onRefresh={() => {
                this._onRefresh();
              }}
            />
          }
        >
          {data.map((item, index) => {
            return <List data={item} key={index} navigation={navigation} url={"ListDetail"} />;
          })}
          <Text style={styles.none_text}>已经到底咯~</Text>
        </ScrollView>
        {/*时间选择弹框 开始*/}
        <Modal animationType='none' transparent={true} visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View style={styles.modal}>
            <View style={styles.main}>
              <View style={styles.header}>
                <TouchableOpacity style={{ flex: 1 }} onPress={this.handleCancel.bind(this)}>
                  <Text style={styles.hand}>取消</Text>
                </TouchableOpacity>
                <Text style={styles.top}>时间筛选</Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={this.handleSubmit.bind(this)}>
                  <Text style={styles.hand}>确定</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.model_body}>
                <View style={styles.model_body_item}>
                  <Text style={[styles.top, { flex: 1, textAlign: "right" }]}>最早时间：</Text>
                  <View style={styles.datepicker}>
                    <DatePicker
                      defaultDate={new Date(Date.now())}
                      locale={"zh_CN"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText='请选择日期'
                      textStyle={{ color: "#343132" }}
                      placeHolderTextStyle={{ color: "#d3d3d3", textAlign: "center" }}
                      onDateChange={this.setEarlyDate.bind(this)}
                      disabled={false}
                      date={startDate}
                    />
                  </View>
                </View>
                <View style={styles.model_body_item}>
                  <Text style={[styles.top, { flex: 1, textAlign: "right" }]}>最晚时间：</Text>
                  <View style={styles.datepicker}>
                    <DatePicker
                      defaultDate={new Date(Date.now())}
                      minimumDate={startDate ? new Date(startDate) : undefined}
                      locale={"zh_CN"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText='请选择日期'
                      textStyle={{ color: "#343132" }}
                      placeHolderTextStyle={{ color: "#d3d3d3", textAlign: "center" }}
                      onDateChange={this.setLateDate.bind(this)}
                      disabled={false}
                      date={endDate}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/*金额填写弹框 开始*/}
        <Modal animationType='none' transparent={true} visible={this.state.modalVisible_money} onRequestClose={() => {}}>
          {is_ios ? (
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={0} style={{}}>
              <View style={[styles.modal]}>
                <View style={[styles.main, { position: "absolute", bottom: 0 }]}>
                  <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ modalVisible_money: false })}>
                      <Text style={styles.hand}>取消</Text>
                    </TouchableOpacity>
                    <Text style={styles.top}>金额筛选</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this.handleSubmitMoney.bind(this)}>
                      <Text style={styles.hand}>确定</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.model_body}>
                    <View style={styles.model_body_item}>
                      <Text style={[styles.top, { flex: 1, textAlign: "right" }]}>最低金额：</Text>
                      <View style={[styles.datepicker, { paddingHorizontal: 15 }]}>
                        <TextInput
                          onChangeText={this.handleStartMoney.bind(this)}
                          style={styles.search_area}
                          underlineColorAndroid='transparent'
                          placeholder='请输入金额'
                          keyboardType='numeric'
                          value={startMoney}
                        />
                      </View>
                    </View>
                    <View style={styles.model_body_item}>
                      <Text style={[styles.top, { flex: 1, textAlign: "right" }]}>最高金额：</Text>
                      <View style={[styles.datepicker, { paddingHorizontal: 15 }]}>
                        <TextInput
                          onChangeText={this.handleEndMoney.bind(this)}
                          style={styles.search_area}
                          underlineColorAndroid='transparent'
                          placeholder='请输入金额'
                          keyboardType='numeric'
                          value={endMoney}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          ) : (
            <View style={[styles.modal]}>
              <View style={[styles.main, { position: "absolute", bottom: 0 }]}>
                <View style={styles.header}>
                  <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ modalVisible_money: false })}>
                    <Text style={styles.hand}>取消</Text>
                  </TouchableOpacity>
                  <Text style={styles.top}>金额筛选</Text>
                  <TouchableOpacity style={{ flex: 1 }} onPress={this.handleSubmitMoney.bind(this)}>
                    <Text style={styles.hand}>确定</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.model_body}>
                  <View style={styles.model_body_item}>
                    <Text style={[styles.top, { flex: 1, textAlign: "right" }]}>最低金额：</Text>
                    <View style={[styles.datepicker, { paddingHorizontal: 15 }]}>
                      <TextInput
                        onChangeText={this.handleStartMoney.bind(this)}
                        style={styles.search_area}
                        underlineColorAndroid='transparent'
                        placeholder='请输入金额'
                        keyboardType='numeric'
                        value={startMoney}
                      />
                    </View>
                  </View>
                  <View style={styles.model_body_item}>
                    <Text style={[styles.top, { flex: 1, textAlign: "right" }]}>最高金额：</Text>
                    <View style={[styles.datepicker, { paddingHorizontal: 15 }]}>
                      <TextInput
                        onChangeText={this.handleEndMoney.bind(this)}
                        style={styles.search_area}
                        underlineColorAndroid='transparent'
                        placeholder='请输入金额'
                        keyboardType='numeric'
                        value={endMoney}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Modal>

        {/*状态选择弹框 开始*/}
        <Modal animationType='none' transparent={true} visible={this.state.modalVisible_status} onRequestClose={() => {}}>
          <TouchableOpacity style={styles.modal} onPress={() => this.setState({ modalVisible_status: false })}>
            <Image
              source={require("static/images/angle.png")}
              style={{ width: 12, height: 14, resizeMode: "contain", position: "absolute", top: this.state.statusHeight, right: 58.5, zIndex: 999 }}
            />
            <View style={[styles.status_box,{top: this.state.statusHeight+10}]}>
              <TouchableOpacity onPress={this.handleStatusItems.bind(this, [4])}>
                <Text style={styles.status_box_text}>待受理</Text>
              </TouchableOpacity>
              <View style={styles.status_box_line} />
              <TouchableOpacity onPress={this.handleStatusItems.bind(this, [5])}>
                <Text style={styles.status_box_text}>已受理</Text>
              </TouchableOpacity>
              <View style={styles.status_box_line} />
              <TouchableOpacity onPress={this.handleStatusItems.bind(this, [6])}>
                <Text style={styles.status_box_text}>待审批</Text>
              </TouchableOpacity>
              <View style={styles.status_box_line} />
              <TouchableOpacity onPress={this.handleStatusItems.bind(this, [8])}>
                <Text style={styles.status_box_text}>已通过</Text>
              </TouchableOpacity>
              <View style={styles.status_box_line} />
              <TouchableOpacity onPress={this.handleStatusItems.bind(this, [7])}>
                <Text style={styles.status_box_text}>已拒绝</Text>
              </TouchableOpacity>
              <View style={styles.status_box_line} />
              <TouchableOpacity onPress={this.handleStatusItems.bind(this, [false])}>
                <Text style={styles.status_box_text}>全部</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  status_box_line: {
    width: "100%",
    height: 1,
    backgroundColor: "#e5e5e5",
    margin: 5
  },
  status_box_text: {
    fontSize: 16,
    color: "#000000"
  },
  status_box: {
    width: 95,
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    right: 15,
    // top: 140,
    backgroundColor: "#fff",
    overflow: "visible"
  },
  datepicker: {
    flex: 2.2,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  model_body_item: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 5
  },
  model_body: {
    marginTop: 30
  },
  top: {
    fontSize: 16,
    flex: 4,
    color: "#343132",
    textAlign: "center"
  },
  hand: {
    flex: 1,
    fontSize: 16,
    color: "#2da995",
    textAlign: "center"
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  main: {
    width: "100%",
    height: 200,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f7f7f7",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    position: "relative"
  },
  check_center: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    display: "flex"
  },
  fixed_box: {
    // height: 145
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
  search_box: {
    width: "100%",
    height: 50,
    backgroundColor: "#40b19b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  search_area: {
    width: "90%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 5,
    position: "relative",
    padding: 0,
    paddingLeft: 5
  },
  placeholder_box: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  placeholder_icon: {
    width: 16,
    height: 16,
    resizeMode: "cover"
  },
  placeholder_text: {
    fontSize: 16,
    textAlign: "center",
    color: "#BBBBBB"
  },
  search_type: {
    width: "100%",
    height: 45,
    backgroundColor: "#fff",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  search_type_item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  search_type_item_img: {
    width: 15,
    height: 15,
    resizeMode: "cover",
    marginLeft: 3
  },
  search_type_item_text: {
    fontSize: 16
  },
  list_box: {
    width: "100%",
    flex: 1,
    backgroundColor: '#f4f4f9'
  },
  none_text: {
    marginTop: 50,
    marginBottom: 50,
    color: "#999999",
    fontSize: 14,
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    userinfo: state.UserReducer.userinfo,
    data: state.DataReducer.check_center_data
  };
};

export default connect(mapStateToProps)(CheckCenter);
