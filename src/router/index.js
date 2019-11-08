import React from "react";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { tabs } from "./tabs";
import DeliverGoods  from "../pages/DeliverGoods/DeliverGoods";
import Login  from "../pages/Login/Login";

const app = createStackNavigator({
  Home: {
    screen:tabs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  DeliverGoods: DeliverGoods,
  Login: Login,
})

const Router = createSwitchNavigator({ App: app });

export default createAppContainer(Router);
