/* 专家咨询 */
import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
class ExpertCounsel extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: (
      <Text style={{ flex: 1, textAlign: 'center', color: '#f3f3f3',fontSize: 16, fontWeight: 'bold', }}>专家咨询</Text>
    ),
    headerStyle: { // 改变页眉样式
      borderBottomWidth: 0,
      shadowOpacity: 0,
      backgroundColor: '#007f6f'
    }
  });

  render() {
    const { navigate, dispatch } = this.props.navigation;
    return (
      <View style={styles.expert_counsel}>
        {/*<View style={styles.title_box}>*/}
          {/*<Text style={styles.title}>专家咨询</Text>*/}
        {/*</View>*/}
        <Image style={styles.bgi} source={require("static/images/online_later.png")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  expert_counsel: {},
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
  },
  bgi: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default ExpertCounsel;
