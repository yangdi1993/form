import React from 'react';
import './App.scss';
import { Input ,InputNumber, Select, Radio  } from 'antd';
const { Option } = Select;
class App extends React.Component {
  state = {
    Radiovalue: 1,
  };
  radioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      Radiovalue: e.target.value,
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
            <Select defaultValue="lucy" className="width-full">
              <Option className="style-block" value="jack">Jack</Option>
              <Option className="style-block" value="lucy">Lucy</Option>
              <Option className="style-block" value="disabled">disabled</Option>
              <Option className="style-block" value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="question-cell">
            <p className="numinput-title">这是文本数字input输入框</p>
            <Radio.Group onChange={this.radioChange} value={this.state.Radiovalue}>
              <Radio className="style-block" value={1}>A</Radio>
              <Radio className="style-block" value={2}>B</Radio>
              <Radio className="style-block" value={3}>C</Radio>
              <Radio className="style-block" value={4}>D</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="form-submit">
        </div>
      </div>
    )
  }
}



export default App;
