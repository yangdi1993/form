import React from 'react';
import './App.scss';

import axios from 'axios'
import { Toast } from 'antd-mobile';

import submitForm from './submit'
import getQuery from './query'

import Forminput from './input/pcinput'
import NumberInput from './number/pcnumber'
import TextareaInput from './textarea/pctextarea'
import FormSelect from './select/select'
import FormRadio from './radio/pcradio'
import FormCheckBox from './checkbox/pccheckbox'
import FormTime from './date/pctime'
import FormUpload from './upload/upload'


class App extends React.Component {
  state = {
    formConfigs: {},
    domain: '',
    Radiovalue: 1,
    checkedList: [],
    formList: [
      
    ],
  };
  componentDidMount(){
    this.getInit()
  };
  getInit(){
    let query = getQuery()
    axios.get('http://m.aielf.net/api/form/get',{
      params: {
        formId: query.formid
      }
    }).then(res => {
      console.log(res.data)
      if(res.data.flag){
        this.setState({
          formList: res.data.data.detail.itemList,
          formConfigs: res.data.data.detail,
          domain: res.data.data.domain
        })
      }else{
        Toast.offline('Network connection failed !!!', 1);
      }
    }).catch(() => {
      return ''
    })
  };
  submit = e => {
    for(let i = 0; i < this.state.formList.length; i++){
      let type = this.state.formList[i].type
      let list = this.state.formList
      if(type==='input'||type==='textarea'||type==='number'||type==='radio'||type==='checkbox'||type==='select'||type==='time'||type==='date'||type==='datetime'||type==='upload'){
        if(this.refs['cildren'+i]){
          list[i].content=this.refs['cildren'+i].state.value
        }
        this.setState({
          formList: list
        })
      }
    }
    console.log(this.state.formList)
    submitForm(this.state.formList)
  };
  render () {
    // eslint-disable-next-line array-callback-return
    let List = this.state.formList.map((item,index) => {
      if(item.type==='input'){
        // eslint-disable-next-line no-unused-expressions
        return <Forminput ref={'cildren'+index} questionName={item.questionName} filed={item} onUserInput={this.userInput} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='textarea'){
        // eslint-disable-next-line no-unused-expressions
        return <TextareaInput ref={'cildren'+index} questionName={item.questionName} filed={item} onUserInput={this.userInput} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='number'){
        // eslint-disable-next-line no-unused-expressions
        return <NumberInput ref={'cildren'+index} questionName={item.questionName} filed={item} onUserInput={this.userInput} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='select'){
        // eslint-disable-next-line no-unused-expressions
        return <FormSelect ref={'cildren'+index} questionName={item.questionName} filed={item} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='radio'){
        // eslint-disable-next-line no-unused-expressions
        return <FormRadio ref={'cildren'+index} questionName={item.questionName} filed={item} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='checkbox'){
        // eslint-disable-next-line no-unused-expressions
        return <FormCheckBox ref={'cildren'+index} questionName={item.questionName} filed={item} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='time'||item.type==='date'||item.type==='datetime'){
        // eslint-disable-next-line no-unused-expressions
        return <FormTime ref={'cildren'+index} questionName={item.questionName} filed={item} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='upload'){
        // eslint-disable-next-line no-unused-expressions
        return <FormUpload ref={'cildren'+index} questionName={item.questionName} filed={item} key={index} id={index} placeholder={item.placeholder} content={item.content} />
      }
      if(item.type==='text'){
        // eslint-disable-next-line no-unused-expressions
        return <div className="question-cell" key={index} >
                  <p className="input-title"><span className="color-red">**</span>{item.questionName}</p>
                  <p className="input-remark">{item.remark}</p>
                </div>
      }
    })
    console.log(List)
    return (
      <div className="App">
        <div className="form-head">
          <h2>表单标题</h2>
        </div>
        <div className="question-list">
          {List}
        </div>
        <div className="form-submit" onClick={this.submit}>
          <div className="sub-btn">提交</div>
        </div>
      </div>
    )
  }
}



export default App;
