import storage from '../utils/storage'

var store = ({
  state: {
    // 存储token
    // token: storage.get('token') ? storage.get('token') : '',
    token: "",
    userAccount: "",
    isAuthenticated: true,
    authority: 1,
    inManagePage: false,
  },
  // 修改token，并将token存入localStorage
  setToken(newToken) {
    this.state.token = newToken;
    storage.set('token', newToken);
    console.log('store、localstorage保存token成功！');
  },
  delToken() {
    this.state.token = "";
    storage.remove("token");
    console.log('store、localstorage删除token成功！');
  },
  //将用户账户存入localStorage
  setUserInfo(userAccount) {
    this.state.userAccount = userAccount;
    storage.set('userAccount', userAccount);
  },
  //改变登录状态
  changeAuthentication() {
    if (this.state.isAuthenticated)
      this.state.isAuthenticated = false;
    else
      this.state.isAuthenticated = true;
  },
  setAuthenticationFalse() {
      this.state.isAuthenticated = false;
  },
  setAuthenticationTrue() {
    this.state.isAuthenticated = true;
},
  //设置权限
  setAuthority(newAuthority) {
    this.state.authority = newAuthority;
    storage.set('authority', newAuthority);
    console.log('store、localstorage保存authority成功！');
  },
  //改变在管理页时的状态
  setInManagePageFlase() {
      this.state.inManagePage = false;
  },
  setInManagePageTrue() {
    this.state.inManagePage = true;
},
});

export default store;
