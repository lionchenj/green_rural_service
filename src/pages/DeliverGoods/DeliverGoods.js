import React, { Component } from "react";
import { View, StyleSheet, Text, Picker, Dimensions, TouchableHighlight } from "react-native";
import { Icon, Left} from 'native-base';
import { POST } from "common/request"; 
import { domain } from "common/url";
import ModelPicker from "../../components/ModelPicker";
import { TextInput } from "react-native-gesture-handler";
const {width, height} = Dimensions.get('window');

class DeliverGoods extends Component<Props> {
  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Text style={{flex: 1, textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: 'bold'}}>发货</Text>
    ),
    headerStyle: { // 改变页眉样式
      borderBottomWidth: 0,
      backgroundColor: '#00887a',
    },
    headerLeft: (<View style={{marginLeft:10}}>
      <Icon style={{color:'#ffffff'}} name='arrow-back' onPress={() => {
         this.props.navigation.navigate('OrderList')
      }}/>
    </View>),
    headerRight:
      (<View/>),
  });

  state = {
    brand:"请选择物流商 (非必选)"
  }
  componentDidMount() {
  }
  //物流商
  setBrandname = (name) => {
    this.setState({
      brand:name
    })
  }
  //选择物流商
  onchange = () => {
    this.refs.picker.show(true)
  }
  setNo = (val) => {
    console.log(val)
  }
  setname = (val) => {
    console.log(val)
  }
  setphone = (val) => {
    console.log(val)
  }
  //提交
  send = (e) => {

  }
  render(){
    return (
      <View style={{width,height, backgroundColor:'#f2f2f2'}}>
        <View>
          <View style={styles.list}>
            <View><Text style={styles.listname}>物流商</Text></View>
            <TouchableHighlight onPress={this.onchange}>
              <View style={styles.brand}>
                <View>
                  <Text style={{fontSize: 18,color:this.state.brand=="请选择物流商 (非必选)"?'#B3B3B3':'#000'}}>{this.state.brand}</Text>
                </View>
                <View>
                  <Text>></Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.list}>
            <View><Text style={styles.listname}>运单编号</Text></View>
            <View><TextInput style={styles.Input} onChangeText={this.setNo} placeholder='请输入运单编号 (非必填)' /></View>
          </View>
          <View style={styles.list}>
            <View><Text style={styles.listname}>送货人名字</Text></View>
            <View><TextInput style={styles.Input} onChangeText={this.setname} placeholder='请输入送货人姓名' /></View>
          </View>
          <View style={styles.list}>
            <View><Text style={styles.listname}>联系方式</Text></View>
            <View><TextInput style={styles.Input} onChangeText={this.setphone} placeholder='请输入送货人电话' /></View>
          </View>
        </View>
        <TouchableHighlight onPress={this.send.bind(this)} style={[styles.button, { marginTop: 30 }]}>
            <Text style={styles.text}>确认发货</Text>
          </TouchableHighlight>
        <ModelPicker ref='picker' brandname={name=>this.setBrandname(name)} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: '#00887A',
    borderBottomWidth:1,
    backgroundColor:'#ffffff',
  },
  listname: {
    paddingTop:5,
    paddingLeft:10,
    fontSize: 10,
    color: '#00887A',
  },
  brand: {
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  Input: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  
  button: {
    width: "80%",
    marginLeft:'10%',
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

export default DeliverGoods;