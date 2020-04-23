/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { Radio } from 'antd';

class FormRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curRadio: '',
      Options: [],
      value: ''
    };
  };
  
  componentDidMount() {
    
  };
  radioChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="select-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        {/* <Radio.Group onChange={this.radioChange} value={this.state.Radiovalue}>
          {this.props.filed.options.map(i => (
            <Radio className="style-block" key={i.value} checked={this.state.value === i.value} onChange={() => this.radioChange(i.value)}>
              {i.label}
            </Radio>
          ))}
        </Radio.Group> */}
        <Radio.Group
          options={this.props.filed.options}
          onChange={this.radioChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default FormRadio;
