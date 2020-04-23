import axios from 'axios'
import { Toast } from 'antd-mobile';

let getInit = function(){
  axios.get('http://m.aielf.net/api/form/get?formid=1').then(res => {
    console.log(res.data)
    if(res.data.flag){
      this.setState({
        formList: res.data.data.itemList,
        formConfigs: res.data.data
      })
    }else{
      Toast.offline('Network connection failed !!!', 1);
    }
  }).catch(() => {
    return ''
  })
};

export default getInit