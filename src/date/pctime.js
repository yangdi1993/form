/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { TimePicker, DatePicker } from 'antd';
import moment from 'moment';


class FormTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };
  timeChange = (time, timeString) => {
    this.setState({
      value: timeString
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="input-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        {
          this.props.filed.type==='time' ?
          <TimePicker onChange={this.timeChange} className="width-full" defaultValue={moment('00:00:00', 'HH:mm:ss')} /> :
          this.props.filed.type==='date'? 
          <DatePicker onChange={this.timeChange} className="width-full" /> :
          <DatePicker showTime onChange={this.timeChange} className="width-full" />
        }
      </div>
    );
  }
}

export default FormTime;
