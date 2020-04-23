/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { List, Radio } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

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
      value: e
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="select-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
          {/* {this.state.curRadio} */}
          <List>
            {this.props.filed.options.map(i => {
              return (
              <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.radioChange(i.value)}>
                {i.label}
              </RadioItem>
            )})}
          </List>
      </div>
    );
  }
}

export default FormRadio;
