import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './input.css';
import { Input } from 'antd';


class Forminput extends Component {
  render() {
    return (
      <div className="shopping-list" id="mountNode">
        <Input/>
      </div>
    );
  }
}
ReactDOM.render(<Input placeholder="Basic usage" />, document.getElementById('root'));

export default Forminput;
