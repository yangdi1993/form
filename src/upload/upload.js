/* eslint-disable react/style-prop-object */
import React ,{ Component } from 'react';
import '../App.scss';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const getBase64 = function(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class TextAreanput extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      value: '',
      previewVisible: false,
      previewImage: '',
      fileList: [
        
      ],
    };
  };
  onUserInput = (e) => {
    console.log(this.state.value)
    this.setState({
      value: e.target.value
    })
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    console.log(file)
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  handleChange = (info) => {
    console.log(info)
    if(info.file.status==='done'){
      if(info.file.response&&info.file.response.flag&&info.file.response.data.detail&&info.file.response.data.detail.url){
        // let curUrl = info.file.response.data.domain + info.file.response.data.detail.url
        let urls = info.fileList.map(item => item.response.data.domain + item.response.data.detail.url) || ''
        this.setState({ value: urls.join(',') })
      }
    }
    if(info.file.status==='error'){
      info.fileList.pop()
    }
    this.setState({ fileList: info.fileList })
  };
  beforeUploadChange = (e) => {
    console.log(e)
  }
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="question-cell" key={this.props.id} >
        <p className="input-title">{ this.props.filed.isRequire ? <span className="color-red">*</span> : '' }{this.props.questionName}</p>
        <p className="input-remark">{this.props.filed.remark}</p>
        <div className="clearfix">
        <Upload
          action="http://file.aielf.net/api/file/uploadasync"
          listType="picture-card"
          beforeUpload={this.beforeUploadChange}
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          accept='image/*'
          name='files'
          data={{"fileMapKey":"form"}}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      </div>
    );
  }
}

export default TextAreanput;
