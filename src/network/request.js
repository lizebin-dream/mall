import Request from 'axios'
import Qs from 'qs'

export default function request(config) {

  const instance = Request.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 2500,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });

  //设置请求拦截器：过滤cxf攻击，拦截指定请求
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
    config.data = Qs.stringify(config.data)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
  instance.interceptors.response.use(response=> {
    // 对响应数据做点什么
    return response.data;
  }, error=> {
    console.log("响应的时候发生错误");
    return Promise.reject(error);
  });

  return instance(config);

}
