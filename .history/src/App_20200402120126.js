import React from 'react';
import './App.scss';
import { Input ,InputNumber, Select, Radio, Checkbox  } from 'antd';
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
class App extends React.Component {
  state = {
    optionsWithDisabled: [{ label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },],
    Radiovalue: 1,
    checkedList: [],
  };
  selectChange = e => {
    console.log('select Change', e);
    this.setState({
      defaultValue: e,
    });
  };
  radioChange = e => {
    console.log('radio checked', e.target);
    this.setState({
      Radiovalue: e.target.value,
    });
  };
  CheckboxChange = e => {
    console.log('checked = ', e);
    this.setState({
      checkedList: e,
    });
  };
  render () {
    return (
      <div className="App">
        <div className="form-head">
          <h2>表单标题</h2>
        </div>
        <div className="question-list">
          <div className="question-cell">
            <p className="input-title">这是文本input输入框</p>
            <Input placeholder="Basic usage" />
          </div>
          <div className="question-cell">
            <p className="numinput-title">这是文本数字input输入框</p>
            <InputNumber min={1} max={10} placeholder="Number" className="number-input" />
          </div>
          <div className="question-cell">
            <p className="select-title">这是文本下拉框框</p>
            <Select defaultValue="lucy" className="width-full" onChange={this.selectChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled">disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="question-cell">
            <p className="numinput-title">这是单选框</p>
            <Radio.Group onChange={this.radioChange} value={this.state.Radiovalue}>
              <Radio className="style-block" value={1}>Awwwwwwwwwww wwwwwwwwwwwwwwwwwww wwwwwsd afsd gdsfwwwwwwwwwwwwwww</Radio>
              <Radio className="style-block" value={2}>B</Radio>
              <Radio className="style-block" value={3}>C</Radio>
              <Radio className="style-block" value={4}>D</Radio>
            </Radio.Group>
          </div>
          <div className="question-cell">
            <p className="numinput-title">这是多选框</p>
            <CheckboxGroup
              options={this.state.optionsWithDisabled}
              value={this.state.checkedList}
              onChange={this.CheckboxChange}
            />
          </div>
        </div>
        <div className="form-submit">
        </div>
      </div>
    )
  }
}



export default App;
