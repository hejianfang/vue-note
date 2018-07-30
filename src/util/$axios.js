import axios from 'axios';
import Vue from 'vue';
import api from './api';
import router from '../router/index'

var xhr = axios.create({
  baseURL: '/',
  timeout: 5000,
  withCredentials:true
});

var $axios = {
  get(url, params, config) {
    return new Promise((resolve, reject) => {
      xhr.get(api[url], {params: params, config}).then(res => {
        if (res.data.code == 401) {
          // // alert('登录失败');
          // router.push('/')
        }
        resolve(res)
      })
    })
  },
  post(url, params, config) {
    return new Promise((resolve, reject) => {
      xhr.post(api[url], params,config).then(res => {
        if (res.data.code == 401) {
          // alert('登录失败');
          // router.push('/')
        }
        resolve(res)
      })
    })
  }
}

Vue.prototype.$axios =$axios;
