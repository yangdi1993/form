formList: [
  {
    type: 'input',
    isRequire: true,
    questionName: '这是单相填空的标题',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '这是单相填空的placeholder'
  },
  {
    type: 'textarea',
    isRequire: true,
    questionName: '这是textarea的标题',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '这是textarea的placeholder'
  },
  {
    type: 'number',
    isRequire: true,
    questionName: '这是number的标题',
    remark: '这是额外的说明哈哈哈',
    content: '',
    min: 2,
    max: 20,
    placeholder: '这是number的placeholder'
  },
  {
    type: 'select',
    isRequire: true,
    questionName: '这是文本下拉框框',
    remark: '这是额外的说明哈哈哈',
    content: '',
    options: [
      {label: 'Jack', value: 'Jack'},
      {label: 'Lucy', value: 'Lucy'},
      {label: 'disabled', value: 'disabled'},
      {label: 'yiminghe', value: 'yiminghe'}
    ],
    placeholder: '这是文本下拉框框的placeholder'
  },
  {
    type: 'radio',
    isRequire: true,
    questionName: '这是单选标题',
    remark: '这是额外的说明哈哈哈',
    content: '',
    options: [
      {label: 'make', value: 'make'},
      {label: '666', value: '666'},
      {label: '男神', value: '男神'}
    ],
    placeholder: '这是这是单选标题的placeholder'
  },
  {
    type: 'checkbox',
    isRequire: true,
    questionName: '这是多选标题',
    remark: '这是额外的说明哈哈哈',
    content: '',
    options: [
      {label: '多选1', value: '多选1'},
      {label: '多选2', value: '多选2'},
      {label: '多选3', value: '多选3'},
      {label: '多选4', value: '多选4'},
      {label: '多选5', value: '多选5'}
    ],
    placeholder: '这是这是多选标题的placeholder'
  },
  {
    type: 'time',
    isRequire: true,
    questionName: '这是时间选择器',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '这是时间选择器的placeholder'
  },
  {
    type: 'date',
    isRequire: true,
    questionName: '这是日期选择器',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '这是日期选择器的placeholder'
  },
  {
    type: 'datetime',
    isRequire: true,
    questionName: '这是日期时间选择器',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '这是日期时间选择器的placeholder'
  },
  {
    type: 'upload',
    isRequire: true,
    questionName: '这是上传图片控件',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '这是上传图片控件的placeholder'
  },
  {
    type: 'text',
    isRequire: true,
    questionName: '纯文本',
    remark: '这是额外的说明哈哈哈',
    content: '',
    placeholder: '纯文本'
  },
],



import React from 'react';
import './App.scss';

import axios from 'axios'
import { Toast } from 'antd-mobile';

import submitForm from './submit'
import getQuery from './query'

import Forminput from './input/pcinput'
import NumberInput from './number/pcnumber'
import TextareaInput from './textarea/pctextarea'
import FormSelect from './select/select'
import FormRadio from './radio/pcradio'
import FormCheckBox from './checkbox/pccheckbox'
import FormTime from './date/pctime'