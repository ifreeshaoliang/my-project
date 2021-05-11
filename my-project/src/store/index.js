import storage from '../utils/storage'

var store = ({
  state: {
    // 存储token
    // token: storage.get('token') ? storage.get('token') : '',
    token: "",
    userID:"",
    userAccount: "",
    userName: "",
    isAuthenticated: false,
    authority: 0,
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
  setUserID(userID) {
    this.state.userID = userID;
    storage.set('userID', userID);
  },
  setUserAccount(userAccount) {
    this.state.userAccount = userAccount;
    storage.set('userAccount', userAccount);
  },
  setUserName(userName) {
    this.state.userName = userName;
    storage.set('userName', userName);
  },
  //改变登录状态
  setAuthenticationFalse() {
      this.state.isAuthenticated = false;
      this.state.authority = 0;
      this.state.userName = '';
      this.state.userAccount = '';
      storage.set('userAccount', '');
      storage.set('userName', '');
  },
  setAuthenticationTrue() {
    this.state.isAuthenticated = true;
},
  //设置权限
  setAuthority(newAuthority) {
    this.state.authority = newAuthority;
    storage.set('authority', newAuthority);
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
