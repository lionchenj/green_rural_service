import DeviceStorage from '../storage/DeviceStorage'
const POST = function(url, params) {
  let token = '';
  DeviceStorage.get('token').then(res => {
    console.log(res);
    if(res == null || res == ''){
        
    } else {
        this.getfinancelist(res);
        token = res
    }
  })
  return fetch('http://47.112.118.25:9092/nongzi/app/'+url, {
    method: "POST",
    headers: {'token': token},
    body: params
  })
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
};
module.exports = {
  POST
};
