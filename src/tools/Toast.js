import React from "react";
import RootSiblings from 'react-native-root-siblings'
import ModelView from '../components/ModelView'
// import CreditManagerModel from '../components/CreditManagerModel'
let rootSiblings = undefined;

class VModelList{
  static show(data){
    console.log(data);
    console.log('fasldalgn');
    const content = data.data;
    if (typeof content !== 'string' || content.length <= 0) {
      return
    }
    const title = data.title;
    if (typeof title !== 'string' || title.length <= 0) {
      return
    }
    const modalOpts = {
      data: data.data,
      title: data.title,
    };
    rootSiblings = new RootSiblings(
      <ModelView {...modalOpts} />
    )
  }
  static hide() {
    if (rootSiblings) {
      rootSiblings.destroy();
      rootSiblings = undefined
    }
  }
}

export {VModelList}
