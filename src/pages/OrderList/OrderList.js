import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text,FlatList,Image,Button} from "react-native";
import { Container, Header, Item, Input, Icon, Tab, Tabs, TabHeading,Badge} from 'native-base';
import ModelView from "../../components/ModelView";
import { POST } from "common/request";
import { domain } from "common/url";
class OrderList extends Component<Props> {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Text style={{flex: 1, textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: 'bold'}}>订单</Text>
    ),
    headerStyle: { // 改变页眉样式
      borderBottomWidth: 0,
      backgroundColor: '#00887a',
    },
    headerLeft: (<View style={{marginLeft:10}}>
      {/* <Icon style={{color:'red'}} name='arrow-back' onPress={() => {
        alert('hhahah')
      }}/> */}
    </View>),
    headerRight:
      (<View/>),
  });

  state = {
    iptordervalue:'1111',
    type:'',
    listdata:[
      {
        datatime:'2017-06-24',
        ordernum:'45435345345',
        status:'待发货',
        img:'',
        sku:'5878(28-8-0)复活 25kg*1',
        money:'600',
        goosnum:2555,
        totalmoney:6231232130,
        reciveman:"awe",
        phone:"123456123",
        adress:'北京市通州市八里河乡8号北京市通州区乡八里河',
      },
      {
        datatime:'2017-06-24',
        ordernum:'123456123456',
        status:'待发货',
        img:'',
        sku:'5878(28-8-0)复活 25kg*1',
        money:'600',
        goosnum:10,
        totalmoney:600,
        reciveman:"张三",
        phone:"123456123",
        adress:'北京市通州市八里河乡8号北京市通州区乡八里河',
      },
      {
        datatime:'2017-06-24',
        ordernum:'123456123456',
        status:'待发货',
        img:'',
        sku:'5878(28-8-0)复活 25kg*1',
        money:'600',
        goosnum:10,
        totalmoney:600,
        reciveman:"张三",
        phone:"123456123",
        adress:'北京市通州市八里河乡8号北京市通州区乡八里河',
      },
    ],
    rertunlist:[
      {
        datatime:'2017-06-24',
        ordernum:'45435345345',
        status:'待发货',
        img:'',
        sku:'5878(28-8-0)复活 25kg*1',
        money:'600',
        goosnum:2555,
        totalmoney:6231232130,
        reciveman:"awe",
        phone:"123456123",
        adress:'北京市通州市八里河乡8号北京市通州区乡八里河',
      },
    ],
    refundlist:[
      {
        datatime:'2017-06-24',
        ordernum:'45435345345',
        status:'待发货',
        img:'',
        sku:'5878(28-8-0)复活 25kg*1',
        money:'600',
        goosnum:2555,
        totalmoney:6231232130,
        reciveman:"awe",
        phone:"123456123",
        adress:'北京市通州市八里河乡8号北京市通州区乡八里河',
      },
    ]
  }
  componentDidMount() {
    this.getList(0);
  }
  //选择
  clickMenuTab = (index,title) =>{
    console.log(index,title);
    this.getList(index)
  }
  //获取列表
  async getList(index) {
    let formData = new FormData();
    formData.append("type", index);
    let result = await POST("order/list",formData);
    console.log(result);
    if (result.errno == 0) {
      this.setState({
        data: result.data
      });
      await dispatch(updateDueDiligenceDetail(result.data));
    } else {
      this.props.navigation.navigate('Login')
      alert(result.errmsg);
    }
  }
  //弹窗
  setModalVisible = (visible) => {
    console.log(visible)
    this.setState({
      type:visible
    })
    this.refs.model.show(true)
  }
  click = () =>{
    console.log('click')
  }
  render(){
    return (
      <Container>
        <View style={styles.topSearh}>
            <Icon name="ios-search" />
            <Input placeholder="Search" style={styles.topSearh_input} onChangeText={
              (text) =>{
                this.setState({
                  iptordervalue:text
                })
              }
            }/>
        </View>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#00887a'}} onChangeTab={this.clickMenuTab}>
          <Tab style={{height:400}} activeTabStyle={{backgroundColor:'#fff'}} activeTextStyle={{color:'#00887a'}}	 tabStyle={{backgroundColor:'#fff'}} textStyle={{color:'#696969'}} heading='全部' >
              <FlatList data={this.state.listdata} renderItem={({item}) => <View style={styles.orderlist_view}>

                  {/* 订单日期、编号、状态 */}
                  <View style={styles.orderlist_view_top}>
                    <View style={styles.orderlist_view_top_view}>
                      <View style={styles.orderlist_view_top_view_view}>
                        <Text>{item.datatime}</Text>
                        <Text>订单编号：{item.ordernum}</Text>
                        <Text>{item.status}</Text>
                      </View>
                    </View>
                  </View>

                  {/* 订单图片、描述、单价、数量 */}
                  <View style={styles.orderlist_view_second}>
                    <View style={styles.orderlist_view_second_view}>
                      <Image style={styles.orderImg} source={{uri:item.img}}></Image>
                      <View style={styles.orderlist_view_second_desc}>
                        <Text>{item.sku}</Text>
                      </View>
                      <View style={styles.pricenum}>
                        <Text>￥{item.money}</Text>
                        <Text>{item.goosnum}</Text>
                      </View>
                    </View>
                  </View>

                  {/* 订单总计信息 */}
                  <View style={styles.orderlist_view_third}>
                    <View style={styles.orderlist_view_third_view}>
                      <Text>应付总额：￥{item.totalmoney}</Text>
                      <Text>共{item.goosnum}件</Text>
                    </View>
                      
                  </View>

                  {/* 收货地址 */}
                  <View style={styles.orderlist_view_fourth}>
                      {/* 收货人和电话 */}
                      <View style={styles.orderlist_view_fourth_view}>
                        <View style={styles.orderlist_view_fourth_top}>
                          <View style={styles.orderlist_view_fourth_top_left}>
                            <Image style={styles.theIcon}></Image>
                            <View>
                              <Text>收货人：{item.reciveman}</Text>
                            </View>
                          </View>
                          <View style={styles.orderlist_view_fourth_top_right}>
                            <Image style={styles.theIcon}></Image>
                            <View>
                              <Text>电话：{item.phone}</Text>
                            </View>
                          </View>
                        </View>
                        {/* 详细地址 */}
                        <View style={styles.orderlist_view_fourth_bot}>
                            <Image style={styles.theIcon}></Image>
                            <View>
                              <Text>收货地址：{item.adress}</Text>
                            </View>
                        </View>
                      </View>
                  </View>

                  {/* 根据状态显示不同按钮 */}
                  <View style={styles.orderlist_view_end}>
                      <View style={styles.orderlist_view_end_view}>
                        <Button onPress={this.setModalVisible.bind(this,'jiage')}
                          title="确认退款"
                          style={styles.orderlist_view_end_btn}
                          color="#2ea996" />

                        <Button onPress={(e)=>{
                          this.props.navigation.navigate('DeliverGoods')
                        }}
                          title="查看原因"
                          style={styles.orderlist_view_end_btn}
                          color="#2ea996" />
                      </View>
                    </View>
                  </View>
                }
              />
            </Tab>
          <Tab style={{height:400}} activeTabStyle={{backgroundColor:'#fff'}} activeTextStyle={{color:'#00887a'}}	 tabStyle={{backgroundColor:'#fff'}} textStyle={{color:'#696969'}} heading='待处理' >
            <FlatList data={this.state.listdata} renderItem={({item}) => <View style={styles.orderlist_view}>

                {/* 订单日期、编号、状态 */}
                <View style={styles.orderlist_view_top}>
                  <View style={styles.orderlist_view_top_view}>
                    <View style={styles.orderlist_view_top_view_view}>
                      <Text>{item.datatime}</Text>
                      <Text>订单编号：{item.ordernum}</Text>
                      <Text>{item.status}</Text>
                    </View>
                  </View>
                </View>

                {/* 订单图片、描述、单价、数量 */}
                <View style={styles.orderlist_view_second}>
                  <View style={styles.orderlist_view_second_view}>
                    <Image style={styles.orderImg} source={{uri:item.img}}></Image>
                    <View style={styles.orderlist_view_second_desc}>
                      <Text>{item.sku}</Text>
                    </View>
                    <View style={styles.pricenum}>
                      <Text>￥{item.money}</Text>
                      <Text>{item.goosnum}</Text>
                    </View>
                  </View>
                </View>

                {/* 订单总计信息 */}
                <View style={styles.orderlist_view_third}>
                  <View style={styles.orderlist_view_third_view}>
                    <Text>应付总额：￥{item.totalmoney}</Text>
                    <Text>共{item.goosnum}件</Text>
                  </View>
                    
                </View>

                {/* 收货地址 */}
                <View style={styles.orderlist_view_fourth}>
                    {/* 收货人和电话 */}
                    <View style={styles.orderlist_view_fourth_view}>
                      <View style={styles.orderlist_view_fourth_top}>
                        <View style={styles.orderlist_view_fourth_top_left}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>收货人：{item.reciveman}</Text>
                          </View>
                        </View>
                        <View style={styles.orderlist_view_fourth_top_right}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>电话：{item.phone}</Text>
                          </View>
                        </View>
                      </View>
                      {/* 详细地址 */}
                      <View style={styles.orderlist_view_fourth_bot}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>收货地址：{item.adress}</Text>
                          </View>
                      </View>
                    </View>
                </View>

                {/* 根据状态显示不同按钮 */}
                <View style={styles.orderlist_view_end}>
                    <View style={styles.orderlist_view_end_view}>
                      <Button onPress={(e)=>{this.setModalVisible(true);}}
                        title="确认退款"
                        style={styles.orderlist_view_end_btn}
                        color="#2ea996" />

                      <Button onPress={(e)=>{
                        this.props.navigation.navigate('/')
                      }}
                        title="查看原因"
                        style={styles.orderlist_view_end_btn}
                        color="#2ea996" />
                    </View>
                  </View>

              </View>
              }
            />
          </Tab>
          <Tab style={{height:400}} activeTabStyle={{backgroundColor:'#fff'}} activeTextStyle={{color:'#00887a'}}	 tabStyle={{backgroundColor:'#fff'}} textStyle={{color:'#696969'}} heading='待收款' >
            <FlatList data={this.state.listdata} renderItem={({item}) => <View style={styles.orderlist_view}>

                {/* 订单日期、编号、状态 */}
                <View style={styles.orderlist_view_top}>
                  <View style={styles.orderlist_view_top_view}>
                    <View style={styles.orderlist_view_top_view_view}>
                      <Text>{item.datatime}</Text>
                      <Text>订单编号：{item.ordernum}</Text>
                      <Text>{item.status}</Text>
                    </View>
                  </View>
                </View>

                {/* 订单图片、描述、单价、数量 */}
                <View style={styles.orderlist_view_second}>
                  <View style={styles.orderlist_view_second_view}>
                    <Image style={styles.orderImg} source={{uri:item.img}}></Image>
                    <View style={styles.orderlist_view_second_desc}>
                      <Text>{item.sku}</Text>
                    </View>
                    <View style={styles.pricenum}>
                      <Text>￥{item.money}</Text>
                      <Text>{item.goosnum}</Text>
                    </View>
                  </View>
                </View>

                {/* 订单总计信息 */}
                <View style={styles.orderlist_view_third}>
                  <View style={styles.orderlist_view_third_view}>
                    <Text>应付总额：￥{item.totalmoney}</Text>
                    <Text>共{item.goosnum}件</Text>
                  </View>
                    
                </View>

                {/* 收货地址 */}
                <View style={styles.orderlist_view_fourth}>
                    {/* 收货人和电话 */}
                    <View style={styles.orderlist_view_fourth_view}>
                      <View style={styles.orderlist_view_fourth_top}>
                        <View style={styles.orderlist_view_fourth_top_left}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>收货人：{item.reciveman}</Text>
                          </View>
                        </View>
                        <View style={styles.orderlist_view_fourth_top_right}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>电话：{item.phone}</Text>
                          </View>
                        </View>
                      </View>
                      {/* 详细地址 */}
                      <View style={styles.orderlist_view_fourth_bot}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>收货地址：{item.adress}</Text>
                          </View>
                      </View>
                    </View>
                </View>

                {/* 根据状态显示不同按钮 */}
                <View style={styles.orderlist_view_end}>
                    <View style={styles.orderlist_view_end_view}>
                      <Button onPress={(e)=>{this.setModalVisible(true);}}
                        title="确认退款"
                        style={styles.orderlist_view_end_btn}
                        color="#2ea996" />

                      <Button onPress={(e)=>{
                        this.props.navigation.navigate('/')
                      }}
                        title="查看原因"
                        style={styles.orderlist_view_end_btn}
                        color="#2ea996" />
                    </View>
                  </View>

              </View>
              }
            />
          </Tab>
          <Tab style={{height:400}} activeTabStyle={{backgroundColor:'#fff'}} activeTextStyle={{color:'#00887a'}}	 tabStyle={{backgroundColor:'#fff'}} textStyle={{color:'#696969'}} heading='待发货' >
            <FlatList data={this.state.listdata} renderItem={({item}) => <View style={styles.orderlist_view}>

                {/* 订单日期、编号、状态 */}
                <View style={styles.orderlist_view_top}>
                  <View style={styles.orderlist_view_top_view}>
                    <View style={styles.orderlist_view_top_view_view}>
                      <Text>{item.datatime}</Text>
                      <Text>订单编号：{item.ordernum}</Text>
                      <Text>{item.status}</Text>
                    </View>
                  </View>
                </View>

                {/* 订单图片、描述、单价、数量 */}
                <View style={styles.orderlist_view_second}>
                  <View style={styles.orderlist_view_second_view}>
                    <Image style={styles.orderImg} source={{uri:item.img}}></Image>
                    <View style={styles.orderlist_view_second_desc}>
                      <Text>{item.sku}</Text>
                    </View>
                    <View style={styles.pricenum}>
                      <Text>￥{item.money}</Text>
                      <Text>{item.goosnum}</Text>
                    </View>
                  </View>
                </View>

                {/* 订单总计信息 */}
                <View style={styles.orderlist_view_third}>
                  <View style={styles.orderlist_view_third_view}>
                    <Text>应付总额：￥{item.totalmoney}</Text>
                    <Text>共{item.goosnum}件</Text>
                  </View>
                    
                </View>

                {/* 收货地址 */}
                <View style={styles.orderlist_view_fourth}>
                    {/* 收货人和电话 */}
                    <View style={styles.orderlist_view_fourth_view}>
                      <View style={styles.orderlist_view_fourth_top}>
                        <View style={styles.orderlist_view_fourth_top_left}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>收货人：{item.reciveman}</Text>
                          </View>
                        </View>
                        <View style={styles.orderlist_view_fourth_top_right}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>电话：{item.phone}</Text>
                          </View>
                        </View>
                      </View>
                      {/* 详细地址 */}
                      <View style={styles.orderlist_view_fourth_bot}>
                          <Image style={styles.theIcon}></Image>
                          <View>
                            <Text>收货地址：{item.adress}</Text>
                          </View>
                      </View>
                    </View>
                </View>

                {/* 根据状态显示不同按钮 */}
                <View style={styles.orderlist_view_end}>
                    <View style={styles.orderlist_view_end_view}>
                      <Button onPress={(e)=>{this.setModalVisible(true);}}
                        title="确认退款"
                        style={styles.orderlist_view_end_btn}
                        color="#2ea996" />

                      <Button onPress={(e)=>{
                        this.props.navigation.navigate('/')
                      }}
                        title="查看原因"
                        style={styles.orderlist_view_end_btn}
                        color="#2ea996" />
                    </View>
                  </View>

              </View>
              }
            />
          </Tab>
          <Tab style={{height:400}} activeTabStyle={{backgroundColor:'#fff'}} activeTextStyle={{color:'#00887a'}}	 tabStyle={{backgroundColor:'#fff'}} textStyle={{color:'#696969'}} heading='待收货' >
              <FlatList data={this.state.listdata} renderItem={({item}) => <View style={styles.orderlist_view}>

                  {/* 订单日期、编号、状态 */}
                  <View style={styles.orderlist_view_top}>
                    <View style={styles.orderlist_view_top_view}>
                      <View style={styles.orderlist_view_top_view_view}>
                        <Text>{item.datatime}</Text>
                        <Text>订单编号：{item.ordernum}</Text>
                        <Text>{item.status}</Text>
                      </View>
                    </View>
                  </View>

                  {/* 订单图片、描述、单价、数量 */}
                  <View style={styles.orderlist_view_second}>
                    <View style={styles.orderlist_view_second_view}>
                      <Image style={styles.orderImg} source={{uri:item.img}}></Image>
                      <View style={styles.orderlist_view_second_desc}>
                        <Text>{item.sku}</Text>
                      </View>
                      <View style={styles.pricenum}>
                        <Text>￥{item.money}</Text>
                        <Text>{item.goosnum}</Text>
                      </View>
                    </View>
                  </View>

                  {/* 订单总计信息 */}
                  <View style={styles.orderlist_view_third}>
                    <View style={styles.orderlist_view_third_view}>
                      <Text>应付总额：￥{item.totalmoney}</Text>
                      <Text>共{item.goosnum}件</Text>
                    </View>
                      
                  </View>

                  {/* 收货地址 */}
                  <View style={styles.orderlist_view_fourth}>
                      {/* 收货人和电话 */}
                      <View style={styles.orderlist_view_fourth_view}>
                        <View style={styles.orderlist_view_fourth_top}>
                          <View style={styles.orderlist_view_fourth_top_left}>
                            <Image style={styles.theIcon}></Image>
                            <View>
                              <Text>收货人：{item.reciveman}</Text>
                            </View>
                          </View>
                          <View style={styles.orderlist_view_fourth_top_right}>
                            <Image style={styles.theIcon}></Image>
                            <View>
                              <Text>电话：{item.phone}</Text>
                            </View>
                          </View>
                        </View>
                        {/* 详细地址 */}
                        <View style={styles.orderlist_view_fourth_bot}>
                            <Image style={styles.theIcon}></Image>
                            <View>
                              <Text>收货地址：{item.adress}</Text>
                            </View>
                        </View>
                      </View>
                  </View>

                  {/* 根据状态显示不同按钮 */}
                  <View style={styles.orderlist_view_end}>
                      <View style={styles.orderlist_view_end_view}>
                        <Button onPress={(e)=>{this.setModalVisible(true);}}
                          title="确认退款"
                          style={styles.orderlist_view_end_btn}
                          color="#2ea996" />

                        <Button onPress={(e)=>{
                          this.props.navigation.navigate('/')
                        }}
                          title="查看原因"
                          style={styles.orderlist_view_end_btn}
                          color="#2ea996" />
                      </View>
                    </View>

                </View>
                }
              />
            </Tab>
          </Tabs>
          <ModelView type={this.state.type} ref='model' click={this.click}  />
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  topSearh: {
    width:'100%',
    height:60,
    backgroundColor:"#40b19b",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:30,
    paddingRight:30
  },
  topSearh_input:{
    width:'85%',
    height:40,
    borderRadius:30,
    backgroundColor:'#fff',
    paddingLeft:20
  },
  orderlistview:{
    width:'100%',
    height:'auto',
    padding:20,
  },
  orderlist_view:{
    width:'90%',
    height:'auto',
    marginTop:10,
    marginLeft:'5%',
    marginBottom:10,
    backgroundColor:'#fff',
    borderRadius:20,
    borderColor:'#ccc',
    borderWidth:1
  },
  orderlist_view_top:{
    width:"100%",
    height:35,
    backgroundColor:"#e5f1ef",
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  orderlist_view_top_view:{
    width:"100%",
    height:35,
    paddingLeft:10,
    paddingRight:10,
  },  
  orderlist_view_top_view_view:{
    width:"100%",
    height:35,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:5,
    paddingRight:5,
    borderBottomColor:'#2ea996',
    borderBottomWidth:1,
  },
  orderlist_view_second:{
    width:"100%",
    height:100,
    paddingLeft:10,
    paddingRight:10
  },
  orderlist_view_second_view:{
    width:"100%",
    height:100,
    justifyContent:'space-between',
    alignItems:'flex-start',
    flexDirection:'row',
    borderBottomColor:'#ccc',
    paddingLeft:5,
    paddingRight:5,
    borderBottomWidth:1,
  },
  orderImg:{
    width:85,
    height:75,
    borderRadius:20
  },
  orderlist_view_second_desc:{
    width:158,
    height:75,
  },
  pricenum:{
    width:50,
    height:35,
    flexDirection:"column",
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  orderlist_view_third:{
    width:'100%',
    height:40,
    paddingLeft:10,
    paddingRight:10,
  },
  orderlist_view_third_view:{
    width:'100%',
    height:40,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row-reverse',
    paddingLeft:5,
    paddingRight:5,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  },
  orderlist_view_fourth:{
    width:'100%',
    height:85,
    paddingLeft:10,
    paddingRight:10,
  },
  orderlist_view_fourth_view:{
    width:'100%',
    height:85,
    paddingLeft:5,
    paddingRight:5,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  },
  orderlist_view_fourth_top:{
    width:'100%',
    height:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  orderlist_view_fourth_top_left:{
    height:"100%",
    width:100,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  orderlist_view_fourth_top_right:{
    height:"100%",
    width:150,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  orderlist_view_fourth_bot:{
    width:'100%',
    height:52,
    justifyContent:'space-between',
    alignItems:'flex-start',
    flexDirection:'row'
  },
  orderlist_view_end:{
    width:'100%',
    height:50,
    paddingLeft:10,
    paddingRight:10,
  },
  orderlist_view_end_view:{
    width:'100%',
    height:50,
    paddingLeft:5,
    paddingRight:5,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row-reverse',
  },  
  orderlist_view_end_btn:{
    width:82,
    height:25,
    borderRadius:20,
    marginLeft:20,
    color:'#fff',
  },
  theIcon:{
    width:14,
    height:15
  },
  order_adress:{
    width:'95%'
  }
});

export default OrderList;