import React from 'react';
import './App.scss';
import { Input ,InputNumber, Select } from 'antd';
const { Option } = Select;
const App = () => (
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
        <p className="select-title">这是文本数字input输入框</p>
        <Select defaultValue="lucy" className>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled">disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </div>
    <div className="form-submit">
    </div>
  </div>
);

export default App;
