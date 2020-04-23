/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { Input } from 'antd';

const { TextArea } = Input;


class TextAreanput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };
  onUserInput = (e) => {
    this.setState({
      value: e.target.value
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="input-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        <TextArea rows={2} placeholder={this.props.placeholder} onChange={this.onUserInput.bind(this)} value={this.state.value} />
      </div>
    );
  }
}

export default TextAreanput;
