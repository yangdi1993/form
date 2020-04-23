/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { Select } from 'antd';
import { Picker, List } from 'antd-mobile';
import { $checkTerminal, } from '../common'


const { Option } = Select;

console.log($checkTerminal())
class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSelect: '',
      Options: [],
      value: ''
    };
  };
  
  componentDidMount() {
    if(this.props.filed.options){
      // this.setState({
      //   Options: this.props.filed.options.map(option => <Option key={option} value={option}>{option}</Option>)
      // })
      if($checkTerminal()){
        this.setState({
          curSelect: <Picker data={this.props.filed.options} cols={1} value={this.state.value} onChange={this.selectChange} extra={this.props.placeholder} className="forss">
                        <List.Item arrow="horizontal"></List.Item>
                      </Picker>
        })
      }else{
        let opts=this.props.filed.options.map(option => <Option key={option.value} value={option.label}>{option.label}</Option>)
        this.setState({
          curSelect: <Select placeholder={this.props.placeholder} className="width-full" onChange={this.selectChange}>
                        {opts}
                      </Select>
        })
      }
      
    }
  };
  selectChange = (e) => {
    this.setState({
      value: e
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="select-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
          {
            $checkTerminal() ?
            <Picker data={this.props.filed.options} cols={1} value={this.state.value} onChange={this.selectChange} extra={this.props.placeholder} className="forss">
              <List.Item arrow="horizontal"></List.Item>
            </Picker> :
            this.state.curSelect
          }
      </div>
    );
  }
}

export default FormSelect;
