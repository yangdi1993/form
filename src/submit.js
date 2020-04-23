import axios from 'axios'
import { Toast } from 'antd-mobile';
import getQuery from './query'
const querys = getQuery()
const submitForm = function(data){
  console.log('submit===', data)
  if(data&&data.length){
    for (let i = 0; i < data.length; i++) {
      if(data[i].isRequire&&!data[i].content&&data[i].type!=='text'){
        Toast.info(`${data[i].questionName}是必填项!`)
        return
      }
    }
    for (let i = 0; i < data.length; i++) {
      data[i]['index']=i
      data[i]['key']=i+''
      data[i].content=data[i].content+''
    }
    axios.post('http://m.aielf.net/api/form/set',{
      "formId": querys.formid||'',
      "playerId": querys.playerid||'',
      "playerName": querys.playername||'',
      "serverId": querys.serverid||'',
      "itemList": data,
      "tag": querys.tag||'',
      "pageToken": querys.pagetoken||'',
      "locale": navigator.language,
      "source": querys.source||'',
      "appVersion": querys.appversion||''
    }).then(res => {
      console.log(res)
    })
  }else{
    Toast.info('请重试')
  }
};



export default submitForm