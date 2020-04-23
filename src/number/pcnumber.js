import React ,{ Component } from 'react';
import '../App.scss';
import { InputNumber } from 'antd';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      numberinput: []
    };
  };
  onUserInput = (e) => {
    this.setState({
      value: e
    })
  };
  isNumber = (val) => {
    var reg = /^-?\d+$/
    if(reg.test(val)){
        return true;
    }else{
        return false;
    }
  };
  componentDidMount() {
    if(this.isNumber(this.props.filed.min)&&this.isNumber(this.props.filed.max)){
      this.setState({
        numberinput: [
          <InputNumber placeholder={this.props.placeholder} type="number" onChange={this.onUserInput.bind(this)} min={this.props.min} max={this.props.max} key={this.props.id} className="number-input" />
        ]
      })
    }
    if(this.isNumber(this.props.filed.min)&&!this.isNumber(this.props.filed.max)){
      this.setState({
        numberinput: [
          <InputNumber placeholder={this.props.placeholder} type="number" onChange={this.onUserInput.bind(this)} min={this.props.min} key={this.props.id} className="number-input" />
        ]
      })
    }
    if(!this.isNumber(this.props.filed.min)&&this.isNumber(this.props.filed.max)){
      this.setState({
        numberinput: [
          <InputNumber placeholder={this.props.placeholder} type="number" onChange={this.onUserInput.bind(this)} max={this.props.max} key={this.props.id} className="number-input" />
        ]
      })
    }
    if(!this.isNumber(this.props.filed.min)&&!this.isNumber(this.props.filed.max)){
      this.setState({
        numberinput: [
          <InputNumber placeholder={this.props.placeholder} type="number" onChange={this.onUserInput.bind(this)} className="number-input" />
        ]
      })
    }
  }
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="input-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        {this.state.numberinput}
      </div>
    );
  }
}

export default NumberInput;
