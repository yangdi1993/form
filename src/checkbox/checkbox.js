/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { List, Checkbox } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;

const checkList = [];
class FormCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCheckbox: '',
      Options: [],
      value: ''
    };
  };
  
  componentDidMount() {
    if(this.props.filed.options){
      this.setState({
        curCheckbox: <List>
                      {this.props.filed.options.map((i,index) => {
                        checkList.push(false)
                        return (
                        <CheckboxItem key={i.value} onChange={() => this.CheckboxChange(i,index)}>
                          {i.label}
                        </CheckboxItem>
                      )})}
                    </List>
      })
      
    }
  };
  CheckboxChange = (e,index) => {
    checkList[index] = !checkList[index]
    let arr = this.props.filed.options.map((option,i) => {
      if(checkList[i]) return option.value
      return false
    }).filter(a => a).join(',')
    this.setState({
      value: arr
    })
  };
  render() {
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="select-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
          <p className="input-remark">{this.props.filed.remark}</p>
          {this.state.curCheckbox}
      </div>
    );
  }
}

export default FormCheckBox;
