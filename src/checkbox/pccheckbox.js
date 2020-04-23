/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

class FormCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCheckbox: '',
      Options: [],
      valueList: [],
      value: ''
    };
  };
  
  componentDidMount() {
    
  };
  CheckboxChange = (e) => {
    this.setState({
      valueList: e,
      value: e.join(',')
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="select-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        <CheckboxGroup
          options={this.props.filed.options}
          value={this.state.valueList}
          onChange={this.CheckboxChange}
        />
      </div>
    );
  }
}

export default FormCheckBox;
