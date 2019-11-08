import React from "react";
import { Image, StyleSheet } from "react-native";
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Index from "pages/Index/Index";
import OrderList from "pages/OrderList/OrderList";
import ExpertCounsel from "pages/ExpertCounsel/ExpertCounsel";
import UserCenter from "pages/UserCenter/UserCenter";



const tabBarOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    shadowOpacity: 0,
    backgroundColor: '#007f6f',
  },
  style: {
    backgroundColor: "#C1EEDE",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  activeTintColor: "#197819",
  inactiveTintColor: "#666666",
  showIcon: true,
}
const IndexStack = createStackNavigator({
  Index: Index,
});
IndexStack.navigationOptions = {
  tabBarLabel: "首页",
  tabBarIcon: ({ focused, tintColor }) => {
    if (focused) {
      return <Image source={require("static/images/indexcheck.png")} style={styles.icon} />;
    }
    return <Image source={require("static/images/index.png")} style={styles.icon} />;
  },
  tabBarOptions: tabBarOptions
};
const OrderListStack = createStackNavigator({
  OrderList: OrderList,
});
OrderListStack.navigationOptions = {
  tabBarLabel: "订单",
  tabBarIcon: ({ focused, tintColor }) => {
    if (focused) {
      return <Image source={require("static/images/orderlistcheck.png")} style={styles.icon} />;
    }
    return <Image source={require("static/images/orderlist.png")} style={styles.icon} />;
  },
  tabBarOptions: tabBarOptions
};
const ExpertCounselStack = createStackNavigator({
  ExpertCounsel: ExpertCounsel,
});
ExpertCounselStack.navigationOptions = {
  tabBarLabel: "专家咨询",
  tabBarIcon: ({ focused, tintColor }) => {
    if (focused) {
      return <Image source={require("static/images/orderlistcheck.png")} style={styles.icon} />;
    }
    return <Image source={require("static/images/orderlist.png")} style={styles.icon} />;
  },
  tabBarOptions: tabBarOptions
};
const UserCenterStack = createStackNavigator({
  UserCenter: UserCenter,
});
UserCenterStack.navigationOptions = {
  tabBarLabel: "个人中心",
  tabBarIcon: ({ focused, tintColor }) => {
    if (focused) {
      return <Image source={require("static/images/returnprocheck.png")} style={styles.icon} />;
    }
    return <Image source={require("static/images/returnpro.png")} style={styles.icon} />;
  },
  tabBarOptions: tabBarOptions
};


const tabs = createBottomTabNavigator({
  IndexStack,
  OrderListStack,
  ExpertCounselStack,
  UserCenterStack
});

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 18,
    resizeMode: "contain",
    marginBottom: -5
  }
});


export { tabs };
