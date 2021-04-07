import http from '../utils/http'

/**
 *  @parms resquest 请求地址 例如：http://localhost:8088/request/...
 *  @param '/Ip'代表vue-cil中config，index.js中配置的代理
 */
let request = "/user/"

export default {
    getUsersInfo(params) {
        return http.get(request, params);
    },
    postLogin(params) {
        return http.post(request, params);
    }
}