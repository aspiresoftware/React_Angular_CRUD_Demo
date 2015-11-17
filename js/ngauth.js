'use strict';

var auth = {
  login: function login(email, pass, cb) {
    var _this = this;

    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    pretendRequest(email, pass, function (res) {
      if (res.authenticated) {
        localStorage.token = res.token;
        localStorage.currentUser = res._email;
        if (cb) cb(true);
        _this.onChange(true);
      } else {
        if (cb) cb(false);
        _this.onChange(false);
      }
    });
  },

  getToken: function getToken() {
    return localStorage.token;
  },

  logout: function logout(cb) {
    delete localStorage.token;
    delete localStorage.currentUser;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn: function loggedIn() {
    return !!localStorage.token;
  },

  onChange: function onChange() {}
};

function pretendRequest(email, pass, cb) {
  setTimeout(function () {
    var abc = localStorage.getItem('credentials');
    if (abc === null) {
      cb({ authenticated: false });
      return;
    } else if (abc) {
      abc = JSON.parse(abc);
      var authenticated = false;
      for (var i = abc.length - 1; i >= 0; i--) {
        if (abc[i].email === email && abc[i].password === pass) {
          cb({
            authenticated: true,
            token: Math.random().toString(36).substring(7),
            _email: email
          });
          authenticated = true;
        }
      }
      if (!authenticated) {
        cb({ authenticated: false });
      }
    } else {
      cb({ authenticated: false });
      return;
    }
  }, 0);
}
