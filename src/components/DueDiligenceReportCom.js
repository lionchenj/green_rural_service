/**
 * 尽职报告 组件
 * */

import {ScrollView,View, Text, StyleSheet, Image, TouchableHighlight} from "react-native";
import React from "react";

import {Accordion,Icon} from 'native-base';
import Layout from '../constants/Layout';
import {connect} from 'react-redux';
import { domain, img_domain } from "../common/url";
import ImageBoot from './ImageBoot';
import DueDiligenceItem from '../pages/Duediligence/DuediligenceList';

const Component = React.Component

class DueDiligenceReportCom extends React.Component {

  /*
  * 实例化
  * */
  constructor(props){
    super(props)
    this.props = props;
    // let {data} = props.navigation;
    let {data} = this.props.data;
    this.state = {
      data: this.props.data,
      dataArray: this.props.dataArray
    }
  }

  /*
  * 当组件接收到新的props时，会触发该函数。在该函数中，通常可以调用setState()来完成对state的修改。
  * */

  /*
  * 页面 渲染
  * */
  render() {
    return (
      <View style={{height: this.props.height}}>
        <Accordion
          dataArray={this.props.dataArray}
          expanded={0}
          headerStyle={{ backgroundColor: "#38a890",marginBottom: 8 }}
          renderContent={this._renderContent}
        />
      </View>
    )
  }


  // 数据展示
  _renderContent = (item) => {
    let _this = this;
    // 设置银行名称
    function setBankName(val) {
      console.log(typeof val);
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '农信、农商行';
          break;
        case '2':
          str = '农业银行';
          break;
        case '3':
          str = '邮政储蓄';
          break;
        case '4':
          str = '其他银行';
          break;
        default:
          str = '其他银行';
          break;
      }
      return str;
    }
    // 设置 年龄 （10～28）
    function setAge(val) {
      console.log(typeof val);
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '18-30';
          break;
        case '2':
          str = '31-45';
          break;
        case '3':
          str = '46-55';
          break;
        case '4':
          str = '55以上';
          break;
        default:
          str = '18-30';
          break;
      }
      return str;
    }
    // 婚姻状况
    function marital_status(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '已婚';
          break;
        case '2':
          str = '未婚';
          break;
        case '3':
          str = '离异';
          break;
        default:
          str = '已婚';
          break;
      }
      return str;
    }
    // 配偶工作
    function spouse_work(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '共同经营';
          break;
        case '2':
          str = '务农';
          break;
        case '3':
          str = '本地打工';
          break;
        case '4':
          str = '本地打工';
          break;
        case '5':
          str = '外出打工';
          break;
        case '6':
          str = '村委成员';
          break;
        case '7':
          str = '带小孩';
          break;
        default:
          str = '共同经营';
          break;
      }
      return str;
    }
    // 长辈
    function elder(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '父亲';
          break;
        case '2':
          str = '母亲';
          break;
        case '3':
          str = '岳父';
          break;
        case '4':
          str = '岳母';
          break;
        default:
          str = '父亲';
          break;
      }
      return str;
    }
    // 子女
    function children(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '1个';
          break;
        case '2':
          str = '2个';
          break;
        case '3':
          str = '3个';
          break;
        case '4':
          str = '3个以上';
          break;
        default:
          str = '1个';
          break;
      }
      return str;
    }
    // 兄弟姐妹排行
    function ranking(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '第一';
          break;
        case '2':
          str = '第二';
          break;
        case '3':
          str = '第三';
          break;
        case '4':
          str = '第四';
          break;
        case '5':
          str = '第五';
          break;
        case '6':
          str = '第六';
          break;
        default:
          str = '第一';
          break;
      }
      return str;
    }
    // 生活情况
    function livingState(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '两代同堂';
          break;
        case '2':
          str = '三代同堂';
          break;
        case '3':
          str = '四代同堂';
          break;
        default:
          str = '两代同堂';
          break;
      }
      return str;
    }
    // 赡养人口
    function supportNumber(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '2人';
          break;
        case '2':
          str = '2-4人';
          break;
        case '3':
          str = '5人以上';
          break;
        default:
          str = '2人';
          break;
      }
      return str;
    }
    // 营业执照类型
    function licenseType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '无';
          break;
        case '2':
          str = '个体户';
          break;
        case '3':
          str = '公司';
          break;
        case '4':
          str = '合作社';
          break;
        case '5':
          str = '家庭农场';
          break;
        default:
          str = '无';
          break;
      }
      return str;
    }
    // 经营模式
    function licenseMode(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '自产自销';
          break;
        case '2':
          str = '公司+用户';
          break;
        case '3':
          str = '订单农业';
          break;
        case '4':
          str = '合作社';
          break;
        case '5':
          str = '其他';
          break;
        default:
          str = '自产自销';
          break;
      }
      return str;
    }
    // 从事工作类型
    function workType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '种植';
          break;
        case '2':
          str = '养殖';
          break;
        case '3':
          str = '种养结合';
          break;
        case '4':
          str = '家庭作坊';
          break;
        default:
          str = '种植';
          break;
      }
      return str;
    }
    // 种植品种
    function plantType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '香蕉';
          break;
        case '2':
          str = '火龙果';
          break;
        case '3':
          str = '甘蔗';
          break;
        case '4':
          str = '沃柑';
          break;
        case '5':
          str = '砂糖橘';
          break;
        case '6':
          str = '青柚';
          break;
        case '7':
          str = '百香果';
          break;
        case '8':
          str = '其他';
          break;
        default:
          str = '其他';
          break;
      }
      return str;
    }
    // 养殖品种
    function breedType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '猪';
          break;
        case '2':
          str = '牛';
          break;
        case '3':
          str = '鱼';
          break;
        case '4':
          str = '鸭';
          break;
        case '5':
          str = '小龙虾';
          break;
        case '6':
          str = '其他';
          break;
        default:
          str = '其他';
          break;
      }
      return str;
    }
    // 从事工作年限
    function agriYear(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '1年以下';
          break;
        case '2':
          str = '1-3年';
          break;
        case '3':
          str = '3-5年';
          break;
        case '4':
          str = '5年以上';
          break;
        default:
          str = '1年以下';
          break;
      }
      return str;
    }
    // 农场规模类型
    function productScale(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '亩';
          break;
        case '2':
          str = '头';
          break;
        case '3':
          str = '只';
          break;
        case '4':
          str = '尾';
          break;
        case '5':
          str = '平方米';
          break;
        default:
          str = '亩';
          break;
      }
      return str;
    }
    // 土地所有者
    function landUser(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '农民';
          break;
        case '2':
          str = '村集体';
          break;
        default:
          str = '农民';
          break;
      }
      return str;
    }
    // 负债 ---- 类型
    function liabilitiesType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '信用';
          break;
        case '2':
          str = '扶贫';
          break;
        default:
          str = '其他';
          break;
      }
      return str;
    }
    // 抵押担保信息
    function mortgageInformation(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '个人房产';
          break;
        case '2':
          str = '其他资产抵押';
          break;
        case '3':
          str = '他人担保';
          break;
        case '4':
          str = '广西农担保';
          break;
        default:
          str = '个人房产';
          break;
      }
      return str;
    }
    // 征信情况
    function creditState(val) {
      console.log(val);
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '无逾期';
          break;
        case '2':
          str = '最近1年有逾期';
          break;
        case '3':
          str = '1-3年内有逾期';
          break;
        default:
          str = '无数据';
          break;
      }
      return str;
    }
    // 农机类型
    function machineType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '播种机';
          break;
        case '2':
          str = '收割机';
          break;
        case '3':
          str = '喷药机';
          break;
        case '4':
          str = '耕种机';
          break;
        case '5':
          str = '其他';
          break;
        default:
          str = '其他';
          break;
      }
      return str;
    }
    // 人工结算方式
    function paymentMethod(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '现金日结';
          break;
        case '2':
          str = '月固定工资+年底奖金';
          break;
        default:
          str = '其他';
          break;
      }
      return str;
    }

    function base() {
      return (
        <View style={styles.contentBox}>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>借款人姓名:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.name}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>年龄:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{setAge(item.data.age.selected)}</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>手机号码:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.phone}</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>身份证号:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.id_number}</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>家庭地址:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.address}</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>预计贷款金额:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.application_amount || '0'} 万元</Text>
            </View>
          </View>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>预计贷款期限:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.term.selected}</Text>
            </View>
          </View>
          {
            _this.props.canChange?<View style={[styles.formItem,{borderBottomWidth: 0}]}>
              <View style={styles.formField}></View>
              <View>
                {/*<Image style={[{width: 18,height: 18}]} source={} />*/}
                <Text onPress={() => {_this.changeInfo('base')}} style={[styles.formValue,styles.changeBtn]}>修改资料</Text>
              </View>
            </View>: null
          }

        </View>
      );
    };
    function family() {
      return (
        <View style={styles.contentBox}>
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>婚姻状况:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{marital_status(item.data.marital_status.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>配偶工作:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{spouse_work(item.data.spouse_work.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>配偶:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.spouse.selected == '1'?'妻子': '丈夫'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>家庭成员:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.family}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>长辈:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{elder(item.data.elder.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>子女:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{children(item.data.children.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>兄弟姐妹排行:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{ranking(item.data.ranking.selected)}</Text>
              {/*<Text style={styles.formValue}>第{item.data.ranking.selected}</Text>*/}
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>生活情况:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{livingState(item.data.living_state.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>赡养人口:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{supportNumber(item.data.support_number.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>补充信息:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.family_note}</Text>
            </View>
          </View>

          {
            _this.props.canChange?<View style={[styles.formItem,{borderBottomWidth: 0}]}>
              <View style={styles.formField}></View>
              <View>
                {/*<Image style={[{width: 18,height: 18}]} source={} />*/}
                <Text onPress={() => {_this.changeInfo('family')}} style={[styles.formValue,styles.changeBtn]}>修改资料</Text>
              </View>
            </View>: null
          }

        </View>
      );
    }
    function company() {
      return (
        <View style={styles.contentBox}>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>公司名称:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.company_name}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>营业执照类型:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{licenseType(item.data.license_type.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>统一社会信用代码:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.licence_code}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>经营模式</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{licenseMode(item.data.license_mode.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>从事工作类型:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{workType(item.data.work_type.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>种植品种:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{plantType(item.data.plant_type.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>养殖品种:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{breedType(item.data.breed_type.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>从事工作年限:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{agriYear(item.data.agri_year.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>农场地址:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.farm_address}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>农场规模:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.scale_amount + productScale(item.data.product_scale.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>土地类型:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.land_type.selected == '1'?'自有':'租赁'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>农场设立时间:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.farm_start_date}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>土地起租年限:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.land_rent_date}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>土地所有者（出租人）:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{landUser(item.data.land_user.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>农场租赁合同年限:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.land_year}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>租金支付方式:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.rent_pay_method.selected == '1'?'一次性支付':'按年支付'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>补充信息:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.company_note}</Text>
            </View>
          </View>

          {
            _this.props.canChange?<View style={[styles.formItem,{borderBottomWidth: 0}]}>
              <View style={styles.formField}></View>
              <View>
                {/*<Image style={[{width: 18,height: 18}]} source={} />*/}
                <Text onPress={() => {_this.changeInfo('company')}} style={[styles.formValue,styles.changeBtn]}>修改资料</Text>
              </View>
            </View>: null
          }

        </View>
      );
    }
    function liabilities() {
      return (
        <View style={styles.contentBox}>

          {
            // 他行负债 列表
            item.data.liabilities.length > 0 ?
              item.data.liabilities.map((item) => {
                return <View key={item} style={{borderBottomWidth: 1,
                  borderBottomColor: '#cdcdcd',
                  paddingBottom: 8,
                  paddingTop: 8,}}>
                  <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom: 8}}>
                    <View style={styles.formField}>
                      <Text style={styles.formField}>他行负债:</Text>
                    </View>
                    <View>
                      <Text style={styles.formValue}>{setBankName(item.liabilities_type.selected)}</Text>
                    </View>
                  </View>
                  <View style={{width:'100%',flexDirection: 'row',justifyContent: 'space-between',paddingLeft: 5,paddingRight: 5}}>
                    <View style={{flexDirection: 'row'}}>
                      <Text>金额：</Text>
                      <Text>{item.amount_of_money}万元</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text>授信：</Text>
                      <Text>{item.credit_granting}年</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text>单笔：</Text>
                      <Text>{item.single_stroke}年</Text>
                    </View>
                  </View>
                </View>
              })
              :
              <View style={{borderBottomWidth: 1,
                borderBottomColor: '#cdcdcd',
                paddingBottom: 8,
                paddingTop: 8,}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',marginBottom: 8}}>
                  <View style={styles.formField}>
                    <Text style={styles.formField}>他行负债:</Text>
                  </View>
                  <View>
                    <Text style={styles.formValue}>无</Text>
                  </View>
                </View>
                <View style={{width:'100%',flexDirection: 'row',justifyContent: 'space-between',paddingLeft: 5,paddingRight: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text>金额：</Text>
                    <Text>/万元</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>授信：</Text>
                    <Text>/年</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>单笔：</Text>
                    <Text>/年</Text>
                  </View>
                </View>
              </View>
          }
          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>是否抵押担保:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.is_mortgage.selected == '1' ? '是':'否'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>负债类型:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{liabilitiesType(item.data.type.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>抵押担保信息:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{mortgageInformation(item.data.mortgage_information.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>抵押物价值:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.mortgage_value}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>是否反担保:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.is_no_guarantee.selected == '1' ? '是':'否'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>征信情况:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{creditState(item.data.credit_state.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>逾期次数:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.defaults_times?item.data.defaults_times:'无'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>逾期金额:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.defaults_money}</Text>
            </View>
          </View>

          <View style={styles.formLine}>
            <View style={styles.formField}>
              <Text style={[styles.formField,styles.LineValue]}>对外担保</Text>
            </View>
            <View style={styles.childBox}>
              <View style={styles.formItemChild}>
                <View style={styles.formField}>
                  <Text style={styles.formField}>被担保人1:</Text>
                </View>
                <View>
                  <Text style={styles.formValue}>{item.data.guarantee_name1}</Text>
                </View>
              </View>
              <View style={styles.formItemChild}>
                <View style={styles.formField}>
                  <Text style={styles.formField}>被担保金额:</Text>
                </View>
                <View>
                  <Text style={styles.formValue}>{item.data.guarantee_amount1}</Text>
                </View>
              </View>
              <View style={styles.formItemChild}>
                <View style={styles.formField}>
                  <Text style={styles.formField}>贷款余额:</Text>
                </View>
                <View>
                  <Text style={styles.formValue}>{item.data.loan_balance1}</Text>
                </View>
              </View>
              <View style={styles.formItemChild}>
                <View style={styles.formField}>
                  <Text style={styles.formField}>被担保人2:</Text>
                </View>
                <View>
                  <Text style={styles.formValue}>{item.data.guarantee_name2}</Text>
                </View>
              </View>
              <View style={styles.formItemChild}>
                <View style={styles.formField}>
                  <Text style={styles.formField}>被担保金额:</Text>
                </View>
                <View>
                  <Text style={styles.formValue}>{item.data.guarantee_amount2}</Text>
                </View>
              </View>
              <View style={styles.formItemChild}>
                <View style={styles.formField}>
                  <Text style={styles.formField}>贷款余额:</Text>
                </View>
                <View>
                  <Text style={styles.formValue}>{item.data.loan_balance2}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>亲友借款:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.friends_relative_loan.selected == '1'? '是':'否'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>未还清金额:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.unpaid_amount}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>补充信息:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.liabilities_note}</Text>
            </View>
          </View>

          {
            _this.props.canChange?<View style={[styles.formItem,{borderBottomWidth: 0}]}>
              <View style={styles.formField}></View>
              <View>
                {/*<Image style={[{width: 18,height: 18}]} source={} />*/}
                <Text onPress={() => {_this.changeInfo('liabilities')}} style={[styles.formValue,styles.changeBtn]}>修改资料</Text>
              </View>
            </View>: null
          }

        </View>
      );
    }
    function productionSales() {
      return (
        <View style={styles.contentBox}>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>大型农业机械:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.has_agri_machine == '1' ?'有': '无'}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>类型:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{machineType(item.data.machine_type.selected)}</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>农机总数量:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.machine_amount}台</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>管理人员数量:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.managers_amount}人</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>技术人员数量:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.technician_amount}人</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>品控人员数量:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.quality_amount}人</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>长期雇佣数量:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{item.data.long_term_workers}人</Text>
            </View>
          </View>

          <View style={styles.formItem}>
            <View style={styles.formField}>
              <Text style={styles.formField}>人工结算方式:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>{paymentMethod(item.data.payment_method.selected)}</Text>
            </View>
          </View>

          <View style={[styles.formLine,{flexDirection: 'row'}]}>
            <View style={[styles.formField,{marginRight: 0}]}>
              <Text style={[styles.formField,{marginRight: 0}]}>类型:</Text>
            </View>
            <View>
              <Text style={styles.formValue}>种植</Text>
            </View>
          </View>
          {/* 种植类型详情 */}
          <View>
            <Accordion
              dataArray={item.data.plant}
              expanded={0}
              style={{width: Layout.window.width - 24}}
              headerStyle={{ backgroundColor: "#38a890",marginBottom: 8 }}
              renderHeader={_this._renderPlantHeader}
              renderContent={_this._renderPlantContent}
            />
          </View>

          {/*<View style={styles.formItem}>*/}
            {/*<View style={styles.formField}>*/}
              {/*<Text style={styles.formField}>补充信息:</Text>*/}
            {/*</View>*/}
            {/*<View>*/}
              {/*<Text style={styles.formValue}>{item.data.family_note}</Text>*/}
            {/*</View>*/}
          {/*</View>*/}

          {
            _this.props.canChange?<View style={[styles.formItem,{borderBottomWidth: 0}]}>
              <View style={styles.formField}></View>
              <View>
                <Text onPress={() => {_this.changeInfo('productionSales')}} style={[styles.formValue,styles.changeBtn]}>修改资料</Text>
              </View>
            </View>: null
          }

        </View>
      );
    }
    function evidenceMaterial() {
      console.log(img_domain + item.data.id_card_pic[0]);
      return (
        <View style={styles.contentBox}>

          <View style={styles.imageTitle}>
            <Text>借款人身份证正反面</Text>
          </View>
          {item.data.id_card_pic.length>0?
            <View style={styles.imageBox}>
              {item.data.id_card_pic.map((uri, index) => {
                console.log(uri);
                return <View key={index} style={styles.imageItem}>
                        <Image style={styles.imageItem} source={{uri: img_domain + uri}} />
                      </View>;
              })}
            </View>
            :
            <View>
              <Text>无数据</Text>
            </View>
          }

          <View style={styles.imageTitle}>
            <Text>借款人配偶身份证正反面</Text>
          </View>
          {item.data.spouse_id_card_pic.length>0?
            <View style={styles.imageBox}>
              {item.data.spouse_id_card_pic.map((uri, index) => {
                console.log(uri);
                return <View key={index} style={styles.imageItem}>
                  <Image style={styles.imageItem} source={{uri: img_domain + uri}} />
                </View>;
              })}
            </View>
            :
            <View>
              <Text>无数据</Text>
            </View>
          }

          <View style={styles.imageTitle}>
            <Text>借款人征信查询授权书</Text>
          </View>
          {item.data.credit_report_pic.length>0?
            <View style={styles.imageBox}>
              {item.data.credit_report_pic.map((uri, index) => {
                console.log(uri);
                return <View key={index} style={styles.imageItem}>
                  <Image style={styles.imageItem} source={{uri: img_domain + uri}} />
                </View>;
              })}
            </View>
            :
            <View>
              <Text>无数据</Text>
            </View>
          }

          <View style={styles.imageTitle}>
            <Text>营业执照正副本</Text>
          </View>
          {item.data.license_pic.length>0?
            <View style={styles.imageBox}>
              {item.data.license_pic.map((uri, index) => {
                console.log(uri);
                return <View key={index} style={styles.imageItem}>
                  <Image style={styles.imageItem} source={{uri: img_domain + uri}} />
                </View>;
              })}
            </View>
            :
            <View>
              <Text>无数据</Text>
            </View>
          }

          <View style={styles.imageTitle}>
            <Text>土地流动合同</Text>
          </View>
          {item.data.land_lease_contract.length>0?
            <View style={styles.imageBox}>
              {item.data.land_lease_contract.map((uri, index) => {
                console.log(uri);
                return <View key={index} style={styles.imageItem}>
                  <Image style={styles.imageItem} source={{uri: img_domain + uri}} />
                </View>;
              })}
            </View>
            :
            <View>
              <Text>无数据</Text>
            </View>
          }

          <View style={styles.imageTitle}>
            <Text>其他材料</Text>
          </View>
          {item.data.other_materials.length>0?
            <View style={[styles.imageBox,{flexWrap: 'wrap'}]}>
              {item.data.other_materials.map((uri, index) => {
                console.log(uri);
                return <View key={index} style={styles.imageItem}>
                  <Image style={styles.imageItem} source={{uri: img_domain + uri}} />
                </View>;
              })}
            </View>
            :
            <View>
              <Text>无数据</Text>
            </View>
          }

          {
            _this.props.canChange?<View style={[styles.formItem,{borderBottomWidth: 0}]}>
              <View style={styles.formField}></View>
              <View>
                {/*<Image style={[{width: 18,height: 18}]} source={} />*/}
                <Text onPress={() => {_this.changeInfo('evidenceMaterial')}} style={[styles.formValue,styles.changeBtn]}>修改资料</Text>
              </View>
            </View>: null
          }

        </View>
      )

    }
    const typeAction = {
      'base': base,
      'family': family,
      'company': company,
      'liabilities': liabilities,
      'productionSales': productionSales,
      'evidenceMaterial': evidenceMaterial,
    };
    return typeAction[item.type]();
  }

  // 种植类型列表 内容
  _renderPlantContent = (item) => {

    // 主要客户类型
    function customerType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '个人';
          break;
        case '2':
          str = '收购商';
          break;
        case '3':
          str = '龙头企业收购';
          break;
        case '4':
          str = '一般企业收购';
          break;
        default:
          str = '个人';
          break;
      }
      return str;
    }
    // 主要销售渠道
    function saleType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '固定客户';
          break;
        case '2':
          str = '等上门';
          break;
        case '3':
          str = '长期订单';
          break;
        case '4':
          str = '单笔合同';
          break;
        case '5':
          str = '合作社销售';
          break;
        default:
          str = '固定客户';
          break;
      }
      return str;
    }
    // 主要销售区域
    function areaType(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '本县内销';
          break;
        case '2':
          str = '销售本市及周边';
          break;
        case '3':
          str = '省内全区';
          break;
        case '4':
          str = '其他省份';
          break;
        default:
          str = '本县内销';
          break;
      }
      return str;
    }
    // 近一年销售佐证
    function lastSalesEvidence(val) {
      if (typeof val === 'number'){
        val = val.toString()
      }
      let str = '';
      switch (val) {
        case '1':
          str = '有';
          break;
        case '2':
          str = '无';
          break;
        case '3':
          str = '部分有';
          break;
        default:
          str = '无';
          break;
      }
      return str;
    }

    return (
      <View style={styles.contentBox}>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>名称:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.name}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>种植面积:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.scale}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>种植周期:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.cycle_year}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>每次时常:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.time_day}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>目前所处时期:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.current_times}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>目前是否丰产期:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.is_high_yield.selected == '1'?'是':'否'}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>主要销售渠道:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{saleType(item.sale_type)}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>主要客户类型:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{customerType(item.customer_type)}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>主要销售区域:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{areaType(item.area_type)}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>近一年销售佐证:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{lastSalesEvidence(item.last_sales_evidence)}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>预计总销售量:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.last_total_amount}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>预计销量总额:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.last_total_price}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>今年本地收购价:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>{item.local_price}</Text>
          </View>
        </View>

        <View style={styles.formItemChild}>
          <View style={styles.formField}>
            <Text style={styles.formField}>今年本地销售价:</Text>
          </View>
          <View>
            <Text style={styles.formValue}>无字段</Text>
          </View>
        </View>

      </View>
    )
  }
  // 种植类型列表 头部
  _renderPlantHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
        {/*<View style={styles.formLine}>*/}
          {/*<View style={[styles.formField,{marginRight: 0}]}>*/}
            <Text style={[styles.formField,{marginRight: 0}]}>作物名称:{item.name}</Text>
          {/*</View>*/}
        {/*</View>*/}
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }

  changeInfo = (type) => {
    console.log(type);
    this.props.changeInfo(type);
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
  },
  contentBox: {
    width: Layout.window.width,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 15,
  },
  childBox: {
    width: Layout.window.width-24,
    paddingLeft: 12,
  },
  formLine: {
    // flexDirection: 'row',
    // paddingBottom: 8,
    paddingTop: 8,
  },
  formItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    paddingBottom: 8,
    paddingTop: 8,
  },
  formItemChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    paddingBottom: 8,
    paddingTop: 8,
    width: Layout.window.width - 48,
  },
  formField: {
    marginRight: 15,
    fontWeight: 'bold'
  },
  LineValue: {
    fontSize: 18,
    fontWeight: '700'
  },
  formValue: {
    maxWidth: Layout.window.width - 100,
    color: '#858585'
  },
  changeBtn: {
    color: '#223a85',
    fontSize: 18,
  },
  imageTitle: {
    marginTop: 15,
    marginBottom:5,
  },
  imageBox: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageItem: {
    width: Layout.window.width/2 - 30,
    height: 80,
    margin: 3,
  }
});

const mapStateToProps = state => {
  console.log(state.DataReducer.dueDiligenceDetail);
  return {
    userinfo: state.UserReducer.userinfo,
    data: state.DataReducer.Loan_farm_data,
    DueDiligenceReportDetail: state.DataReducer.DueDiligenceReportDetail,
  };
};

export default connect(mapStateToProps)(DueDiligenceReportCom);
