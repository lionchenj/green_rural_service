import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

class Header extends Component {
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }
  render() {
    const { title, back, style } = this.props;
    return (
      <View style={[styles.title_box, { ...style }]}>
        {back && (
          <TouchableOpacity style={styles.back_box} onPress={this.goBack.bind(this)}>
            <Image style={styles.back} source={require("static/images/icon_back.png")} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title_box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#00887a",
    position: "relative"
  },
  back_box: {
    width: 60,
    height: "100%",
    position: "absolute",
    left: 0,
    // backgroundColor: "red",
    display: "flex",
    // alignItems: "center",
    paddingLeft: 12,
    justifyContent: "center"
  },
  back: {
    width: 12,
    height: 14,
    resizeMode: "contain"
  },
  title: {
    color: "#fff",
    fontSize: 16,
    textAlignVertical: "center"
  }
});
export default Header;
