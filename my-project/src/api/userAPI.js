import http from '../utils/http'

/**
 *  @parms resquest 请求地址 例如：http://localhost:8081/request/...
 */

let request = "/user/"

export default {
    getUsersInfo(params) {
        return http.post(request+'getAllUserInfo', params);
    },
    getUserByAccount(params) {
        return http.get(request+'getUser', params);
    },
    login(params) {
        return http.post(request+'login', params);
    },
    register(params) {
        return http.get(request+'register', params);
    },

}