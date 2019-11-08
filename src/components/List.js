import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, ImageBackground} from 'react-native';

class List extends Component {
  handleClick() {
    const {url, navigation, data} = this.props;
    navigation.navigate(url, data);
  }

  setStatus = (status) => {
    switch (status) {
      case 0:
        return <Text style={[checkList.status]}>暂存</Text>;
      case 1:
        return <Text style={[checkList.status]}>暂存</Text>;
      case 2:
        return <Text style={[checkList.status]}>平台审核未通过</Text>;
      case 3:
        return <Text style={[checkList.status]}>平台审核通过</Text>;
      case 4:
        return <Text style={[checkList.status]}>待受理</Text>;
      case 5:
        return <Text style={[checkList.status,{color: '#71b2da'}]}>已受理</Text>;
      case 6:
        return <Text style={[checkList.status,{color: '#40b19b'}]}>待审批</Text>;
      case 7:
        return <Text style={[checkList.status,{color: '#ff353d'}]}>未通过</Text>;
      case 8:
        return <Text style={[checkList.status,{color: '#71b2da'}]}>已通过</Text>;
    }
  }

  render() {
    const {id, term, application_amount, create_time,name, org_id, org_name, financial_name, status, companyId} = this.props.data;
    return (
      <TouchableOpacity style={checkList.check_list} onPress={this.handleClick.bind(this)}>
        <View style={checkList.bgi_main}>
          <View style={checkList.align_left}>
            <Text style={checkList.buss_name}>{name || ''}</Text>
            <View style={checkList.other}>
              <Text style={checkList.date}>{create_time || ''}</Text>
              <Text style={checkList.time}/>
            </View>
            {this.setStatus(status)}
          </View>
          <View style={checkList.align_right}>
            <View style={checkList.priceText}>
              <Text style={checkList.valueText}>{application_amount || ''}</Text>
              <Text style={checkList.labelText}>万元</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const checkList = StyleSheet.create({
  check_list: {
    width: '100%',
    height: 90,
    marginBottom: 5,
  },
  bgi_main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  align_left: {
    flex: 2.3,
    paddingLeft: 25,
    display: 'flex',
    // alignItems:"center",
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buss_name: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'PingFangSC-Medium',
  },
  other: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  time: {
    fontSize: 14,
    color: '#999',
  },
  align_right: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  priceText: {
    flexDirection: 'row',
  },
  valueText: {
    fontSize: 50,
    color: '#39a890',
  },
  labelText: {
    width: 20,
    alignSelf: 'center',
    lineHeight: 20,
    marginLeft: 5,
  },
  nums: {
    fontSize: 20,
    marginBottom: 10,
    color: '#40b19b',
    fontFamily: 'PingFangSC-Medium',
  },
  status: {
    fontSize: 16,
    marginTop: 5,
  },
});
export default List;
