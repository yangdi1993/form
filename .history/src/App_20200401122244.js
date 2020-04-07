import React from 'react';
import './App.scss';
import {Input} from 'antd';
const App = () => (
  <div className="App">
    <div className="form-head">
      <h2>表单标题</h2>
    </div>
    <div className="question-list">
      <div className="">
        <p className="input-title">这是文本input输入框</p>
        <Input placeholder="Basic usage" />
      </div>
    </div>
    <div className="form-submit">
    </div>
  </div>
);

export default App;
