import http from '../utils/http'

/**
 *  @parms resquest 请求地址 例如：http://localhost:8081/request/...
 */

let request = "/article/"

export default {
  getArticleByType(params) {
    return http.get(request, params);
  },
  getArticleByUserID(params) {
    return http.get(request+'getArticlesByUserID', params);
  },
  getArticles(params) {
    return http.get(request+'getArticles', params);
  },
  submitArticle(params) {
    return http.get(request + "add", params);
  }
}
