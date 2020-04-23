/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { DatePicker, List } from 'antd-mobile';


class FormTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeValue: '',
      value: ''
    };
  };
  timeChange = (e) => {
    this.setState({
      timeValue: e,
      value: e.getTime()
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="input-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        {
          this.props.filed.type==='time' ?
          <DatePicker
            mode="time"
            value={this.state.timeValue}
            extra={this.props.placeholder}
            onChange={this.timeChange}
            className="select-style"
          >
            <List.Item arrow="horizontal"></List.Item>
          </DatePicker> :
          this.props.filed.type==='date'? 
          <DatePicker
            mode="date"
            extra={this.props.placeholder}
            value={this.state.timeValue}
            onChange={this.timeChange}
          >
            <List.Item arrow="horizontal"></List.Item>
          </DatePicker> :
          <DatePicker
            value={this.state.timeValue}
            extra={this.props.placeholder}
            onChange={this.timeChange}
          >
            <List.Item arrow="horizontal"></List.Item>
          </DatePicker>
        }
        
      </div>
    );
  }
}

export default FormTime;
