import http from '../utils/http'

/**
 *  @parms resquest 请求地址 例如：http://localhost:8081/request/...
 */

 let request = "/seller/"

 export default {
     getUsersInfo(params) {
         return http.get(request, params);
     },
     postLogin(params) {
         return http.post(request, params);
     }
 }