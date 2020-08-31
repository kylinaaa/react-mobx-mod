import Axios from "axios";

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

const api= Axios.create();

/****** request拦截器==>对请求参数做处理 ******/
api.interceptors.request.use(config => {
	//配置信息
    return config;
});

api.interceptors.response.use(response => {  //成功请求到数据
        //这里根据后端提供的数据进行对应的处理
        if (response.status === 200) {
            return response.data;
        } else {
            console.log(response);
        }
    },
    error => {  //响应错误处理
        console.log('error : '+error);
        if(error.response.status === 403){
            // router.push("/login");
        }else{
            console.log(error);
        }
    });

export default api;