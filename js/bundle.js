"use strict";

var About = React.createClass({
  displayName: "About",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "navbar navbar-default" },
        React.createElement(
          "button",
          { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-responsive-collapse" },
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" })
        ),
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "javascript:void(0)" },
            React.createElement(
              "h3",
              { className: "hidden-xs" },
              "CRUD Angular react application"
            ),
            React.createElement(
              "span",
              { className: "visible-xs" },
              "CRUD Angular react application"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "navbar-collapse collapse navbar-responsive-collapse" },
          React.createElement(
            "ul",
            { className: "nav navbar-nav navbar-right" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "javascript:void(0)", className: "btn btn-link navbar-brand", onClick: this.handleClick },
                "Logout"
              )
            )
          )
        )
      ),
      React.createElement(
        "a",
        { href: "#/edit", className: "btn btn-primary" },
        "Edit Detail"
      ),
      React.createElement("br", null),
      React.createElement(
        "a",
        { href: "#/delete", className: "btn btn-danger" },
        "Delete Account"
      )
    );
  },
  handleClick: function handleClick(event) {
    auth.logout();
    this.props.handleSubmit();
  }
});
'use strict';

var Delete = React.createClass({
  displayName: 'Delete',
  showDialog: function showDialog() {
    $('#myModal').modal('show');
  },
  dismissDialog: function dismissDialog() {
    $('#myModal').modal('hide');
  },
  deleteAccont: function deleteAccont() {
    this.dismissDialog();
    this.deleteDetail();
  },
  deleteDetail: function deleteDetail() {
    var email = localStorage.getItem('currentUser');
    var users = JSON.parse(localStorage.getItem('credentials'));
    for (var i = users.length - 1; i >= 0; i--) {
      if (users[i].email === email) {
        users.splice(i, 1);
        users = users;
        localStorage.setItem('credentials', JSON.stringify(users));
        break;
      }
    };
    users = JSON.parse(localStorage.getItem('registerUsers'));
    delete users[email];
    localStorage.setItem('registerUsers', JSON.stringify(users));
    auth.logout();
    this.redirectToHome();
  },

  redirectToHome: function redirectToHome() {
    window.location.hash = '#/home';
  },
  handleClick: function handleClick() {
    auth.logout();
    this.redirectToHome();
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'modal fade', id: 'myModal' },
        React.createElement(
          'div',
          { className: 'modal-dialog' },
          React.createElement(
            'div',
            { className: 'modal-content' },
            React.createElement(
              'div',
              { className: 'modal-header' },
              React.createElement(
                'h4',
                { className: 'modal-title' },
                'Are you sure want to delete account?'
              )
            ),
            React.createElement(
              'div',
              { className: 'modal-footer' },
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-default', onClick: this.dismissDialog, 'data-dismiss': 'modal' },
                'No'
              ),
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-default', onClick: this.deleteAccont },
                'Yes'
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'navbar navbar-default' },
        React.createElement(
          'button',
          { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-responsive-collapse' },
          React.createElement('span', { className: 'icon-bar' }),
          React.createElement('span', { className: 'icon-bar' }),
          React.createElement('span', { className: 'icon-bar' })
        ),
        React.createElement(
          'div',
          { className: 'navbar-header' },
          React.createElement(
            'a',
            { className: 'navbar-brand', href: '#/about' },
            React.createElement(
              'h3',
              { className: 'hidden-xs' },
              'CRUD Angular react application'
            ),
            React.createElement(
              'span',
              { className: 'visible-xs' },
              'CRUD Angular react application'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'navbar-collapse collapse navbar-responsive-collapse' },
          React.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'javascript:void(0)', className: 'btn btn-link navbar-brand', onClick: this.handleClick },
                'Logout'
              )
            )
          )
        )
      ),
      React.createElement(
        'a',
        { href: 'javascript:void(0)', onClick: this.showDialog, className: 'btn btn-danger' },
        'Delete My Account'
      )
    );
  }
});
'use strict';

var Edit = React.createClass({
  displayName: 'Edit',
  getInitialState: function getInitialState() {
    var email = localStorage.getItem('currentUser');
    var users = JSON.parse(localStorage.getItem('registerUsers'));
    return {
      username: users[email].username,
      password: users[email].password,
      email: users[email].email,
      city: users[email].city
    };
  },
  updateProfile: function updateProfile(event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem('credentials'));
    for (var i = users.length - 1; i >= 0; i--) {
      if (users[i].email === this.state.email) {
        users[i].password = this.refs.password.value;
      }
    };
    localStorage.setItem('credentials', JSON.stringify(users));
    var users = JSON.parse(localStorage.getItem('registerUsers'));
    users[this.state.email].username = this.refs.username.value;
    users[this.state.email].password = this.refs.password.value;
    users[this.state.email].city = this.refs.city.value;
    localStorage.setItem('registerUsers', JSON.stringify(users));

    $('#myModal').modal({ backdrop: 'static', keyboard: false }, 'show');
    // this.props.redirectToAbout();
    // this.history.replaceState(null, '/about')
  },

  handleClick: function handleClick(event) {
    auth.logout();
    this.redirectToHome();
  },
  redirectToHome: function redirectToHome(event) {
    this.props.redirectToHome();
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'navbar navbar-default' },
        React.createElement(
          'button',
          { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-responsive-collapse' },
          React.createElement('span', { className: 'icon-bar' }),
          React.createElement('span', { className: 'icon-bar' }),
          React.createElement('span', { className: 'icon-bar' })
        ),
        React.createElement(
          'div',
          { className: 'navbar-header' },
          React.createElement(
            'a',
            { className: 'navbar-brand', href: '#/about' },
            React.createElement(
              'h3',
              { className: 'hidden-xs' },
              'CRUD Angular react application'
            ),
            React.createElement(
              'span',
              { className: 'visible-xs' },
              'CRUD Angular react application'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'navbar-collapse collapse navbar-responsive-collapse' },
          React.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: 'javascript:void(0)', className: 'btn btn-link navbar-brand', onClick: this.handleClick },
                'Logout'
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'modal fade', id: 'myModal' },
        React.createElement(
          'div',
          { className: 'modal-dialog' },
          React.createElement(
            'div',
            { className: 'modal-content' },
            React.createElement(
              'div',
              { className: 'modal-header' },
              React.createElement(
                'h4',
                { className: 'modal-title' },
                'Sucessfully updated details'
              )
            ),
            React.createElement(
              'div',
              { className: 'modal-footer' },
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-default', onClick: this.redirectToHome, 'data-dismiss': 'modal' },
                'Ok'
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'well col-md-6 col-lg-6 col-xs-12 col-sm-6' },
        React.createElement(
          'h3',
          null,
          'Edit User Detail'
        ),
        React.createElement('br', null),
        React.createElement(
          'form',
          null,
          React.createElement(
            'label',
            null,
            'Username'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', ref: 'username', defaultValue: this.state.username, required: 'true' }),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Password'
          ),
          React.createElement('input', { required: 'true', className: 'form-control', ref: 'password', type: 'password', defaultValue: this.state.password }),
          ' ',
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'Email'
          ),
          React.createElement('input', { type: 'email', className: 'form-control', disabled: 'true', required: 'true', defaultValue: this.state.email }),
          React.createElement('br', null),
          React.createElement(
            'label',
            null,
            'City'
          ),
          React.createElement('input', { required: 'true', className: 'form-control', ref: 'city', defaultValue: this.state.city }),
          React.createElement('br', null),
          React.createElement(
            'button',
            { type: 'button', onClick: this.updateProfile, className: 'btn btn-primary' },
            'Submit'
          ),
          '              '
        )
      )
    );
  }
});
'use strict';

var NoElement = React.createClass({
  displayName: "NoElement",

  render: function render() {
    return;
  }
});
var NavBar = React.createClass({
  displayName: "NavBar",

  render: function render() {
    return React.createElement(
      "div",
      { className: "navbar navbar-default" },
      React.createElement(
        "button",
        { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-responsive-collapse" },
        React.createElement("span", { className: "icon-bar" }),
        React.createElement("span", { className: "icon-bar" }),
        React.createElement("span", { className: "icon-bar" })
      ),
      React.createElement(
        "div",
        { className: "navbar-header" },
        React.createElement(
          "a",
          { className: "navbar-brand", href: "#/home" },
          React.createElement(
            "h3",
            null,
            "CRUD Angular react application"
          )
        )
      ),
      React.createElement(
        "ul",
        { className: "nav navbar-nav pull-right", disabled: auth.getToken },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "javascript:void(0)", className: "btn btn-flat btn-primary" },
            "Logout"
          )
        )
      )
    );
  }
});
var App = React.createClass({
  displayName: "App",
  componentWillMount: function componentWillMount() {
    // auth.onChange = this.updateAuth
    auth.login();
  },

  getInitialState: function getInitialState() {
    return {
      error: false
    };
  },

  handleSubmit: function handleSubmit(event) {
    var _this = this;

    event.preventDefault();
    var email = this.refs.email.value;
    var pass = this.refs.password.value;

    auth.login(email, pass, function (loggedIn) {
      if (!loggedIn) return _this.setState({ error: true });else {
        _this.setState({ error: false });
      }
      var location = _this.props.location;

      _this.props.handleSubmit();
      // if (location.state && location.state.nextPathname) {
      //   this.history.replaceState(null, location.state.nextPathname)
      // } else {
      //   this.history.replaceState(null, '/about')
      // }
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "navbar navbar-default" },
        React.createElement(
          "button",
          { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-responsive-collapse" },
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" }),
          React.createElement("span", { className: "icon-bar" })
        ),
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "a",
            { className: "navbar-brand", href: "javascript:void(0)" },
            React.createElement(
              "h3",
              { className: "hidden-xs" },
              "CRUD Angular react application"
            ),
            React.createElement(
              "span",
              { className: "visible-xs" },
              "CRUD Angular react application"
            )
          ),
          React.createElement(
            "ul",
            { className: "nav pull-right" },
            React.createElement(
              "li",
              null,
              React.createElement("a", { href: "javascript:void(0)", className: "btn btn-link navbar-brand" })
            )
          )
        )
      ),
      React.createElement(
        "div",
        { style: { 'margin': 'auto' } },
        React.createElement(
          "form",
          { className: "form-horizontal well col-lg-6 col-md-6 col-sm-6 col-xs-12", onSubmit: this.handleSubmit },
          React.createElement(
            "fieldset",
            null,
            React.createElement(
              "legend",
              null,
              "Login"
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "inputEmail", className: "col-sm-2 col-md-2 col-xs-2 col-lg-2 control-label" },
                "Email"
              ),
              React.createElement(
                "div",
                { className: "col-lg-10 col-md-10 col-sm-10 col-xs-10" },
                React.createElement("input", { type: "email", ref: "email", className: "form-control col-lg-6 col-md-6 col-sm-6 col-xs-6", id: "inputEmail", placeholder: "Email" })
              ),
              React.createElement("br", null),
              React.createElement(
                "label",
                { htmlFor: "inputPassword", className: "col-sm-2 col-md-2 col-xs-2 col-lg-2 control-label" },
                "Password"
              ),
              React.createElement(
                "div",
                { className: "col-lg-10 col-md-10 col-sm-10 col-xs-10" },
                React.createElement("input", { type: "password", ref: "password", className: "form-control col-lg-6 col-md-6 col-sm-6 col-xs-6", id: "inputPassword", placeholder: "Password" }),
                React.createElement("br", null)
              )
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "div",
                { className: "col-lg-10 col-lg-offset-2" },
                React.createElement(
                  "button",
                  { type: "submit", className: "btn btn-primary" },
                  "Submit"
                ),
                React.createElement(
                  "a",
                  { href: "#/register", className: "btn btn-flat btn-primary" },
                  "Register"
                )
              )
            )
          ),
          this.state.error && React.createElement(
            "span",
            { className: "label label-danger" },
            "Please enter valid credentials"
          )
        ),
        React.createElement("div", { className: "clearfix" })
      )
    );
  }
});
'use strict';

var Register = React.createClass({
  displayName: 'Register',
  render: function render() {
    return React.createElement(Form, null);
  }
});

var Form = React.createClass({
  displayName: 'Form',
  getInitialState: function getInitialState() {
    return {
      username: '',
      password: '',
      city: '',
      state: '',
      errorText: { uname: '', pwd: '', city: '', errorText: '' }
    };
  },
  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    var registerUsers = localStorage.getItem('registerUsers');
    var duplicateAccount = false;
    if (registerUsers !== null) {
      registerUsers = JSON.parse(registerUsers);
      if (registerUsers[this.refs.email.value]) {
        duplicateAccount = true;
        jQuery('#myModal').modal('show');
        return;
      }
    }
    if (!duplicateAccount) {
      this.setCredentials();
      // this.history.replaceState(null, '/');
      this.props.redirectToHome();
    }
  },
  setCredentials: function setCredentials() {
    var credentials = localStorage.getItem('credentials'),
        users = {};
    users.email = this.refs.email.value;
    users.password = this.refs.pwd.value;
    if (credentials === null) {
      credentials = [];
      credentials.push(users);
    } else {
      credentials = JSON.parse(credentials);
      credentials.push(users);
    }
    localStorage.setItem('credentials', JSON.stringify(credentials));
    this.setRegistration(users.email);
  },
  setRegistration: function setRegistration(email) {
    var registerUsers = localStorage.getItem('registerUsers'),
        users = {};

    if (registerUsers === null) {
      registerUsers = {};
      registerUsers.email = this.refs.email.value;
      registerUsers.username = this.refs.uname.value;
      registerUsers.password = this.refs.pwd.value;
      registerUsers.city = this.refs.city.value;
      users[email] = registerUsers;
    } else {
      users = JSON.parse(registerUsers);
      users[email] = {};
      users[email].email = this.refs.email.value;
      users[email].username = this.refs.uname.value;
      users[email].password = this.refs.pwd.value;
      users[email].city = this.refs.city.value;
    }
    localStorage.setItem('registerUsers', JSON.stringify(users));
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'navbar navbar-default' },
        React.createElement(
          'button',
          { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-responsive-collapse' },
          React.createElement('span', { className: 'icon-bar' }),
          React.createElement('span', { className: 'icon-bar' }),
          React.createElement('span', { className: 'icon-bar' })
        ),
        React.createElement(
          'div',
          { className: 'navbar-header' },
          React.createElement(
            'a',
            { className: 'navbar-brand', href: '#/home' },
            React.createElement(
              'h3',
              { className: 'hidden-xs' },
              'CRUD Angular react application'
            ),
            React.createElement(
              'span',
              { className: 'visible-xs' },
              'CRUD Angular react application'
            )
          )
        ),
        React.createElement(
          'ul',
          { className: 'nav pull-right' },
          React.createElement(
            'li',
            null,
            React.createElement('a', { href: 'javascript:void(0)', className: 'btn btn-link navbar-brand' })
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'well col-sm-6 col-md-6 col-lg-6 col-xs-12' },
        React.createElement(
          'div',
          { className: 'modal fade', id: 'myModal' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'button',
                  { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
                  '×'
                ),
                React.createElement(
                  'h4',
                  { className: 'modal-title' },
                  'Account with email id is already made, please use different email address'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
                  'Ok'
                )
              )
            )
          )
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          'UserName',
          React.createElement('br', null),
          React.createElement('input', { type: 'text', className: 'form-control', ref: 'uname', required: true }),
          React.createElement('br', null),
          'Password',
          React.createElement('br', null),
          React.createElement('input', { type: 'password', className: 'form-control', ref: 'pwd', required: true }),
          React.createElement('br', null),
          'City',
          React.createElement('br', null),
          React.createElement('input', { type: 'text', className: 'form-control', ref: 'city', required: true }),
          React.createElement('br', null),
          'Email',
          React.createElement('br', null),
          React.createElement('input', { type: 'email', ref: 'email', className: 'form-control', required: true }),
          React.createElement('br', null),
          React.createElement(
            'button',
            { className: 'btn btn-primary' },
            'Submit'
          )
        )
      ),
      React.createElement('div', { className: 'clearfix' })
    );
  }
});
