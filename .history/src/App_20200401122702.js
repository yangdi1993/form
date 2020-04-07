import React from 'react';
import './App.scss';
import {Input} from 'antd';
const App = () => (
  <div className="ar-App">
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
        <Input placeholder="Basic usage" />
      </div>
    </div>
    <div className="form-submit">
    </div>
  </div>
);

export default App;
