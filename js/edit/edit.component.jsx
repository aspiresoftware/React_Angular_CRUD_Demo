'use strict';
const Edit = React.createClass({
  getInitialState() {
    var email = localStorage.getItem('currentUser');
    var users = JSON.parse(localStorage.getItem('registerUsers'));
    return {
      username:users[email].username,
      password:users[email].password,
      email:users[email].email,
      city:users[email].city,
    }
  },
  updateProfile(event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem('credentials'));
    for (var i = users.length - 1; i >= 0; i--) {
      if(users[i].email === this.state.email) {
        users[i].password = this.refs.password.value
      }
    };
    localStorage.setItem('credentials',JSON.stringify(users));
    var users = JSON.parse(localStorage.getItem('registerUsers'));
    users[this.state.email].username = this.refs.username.value;
    users[this.state.email].password = this.refs.password.value;
    users[this.state.email].city = this.refs.city.value;
    localStorage.setItem('registerUsers',JSON.stringify(users))

    $('#myModal').modal({ backdrop: 'static', keyboard: false },'show');
    // this.props.redirectToAbout();
    // this.history.replaceState(null, '/about')
  },
    handleClick:function(event) {
    auth.logout();
    this.redirectToHome();
  },
  redirectToHome:function(event) {
    this.props.redirectToHome();
  },
  render() {
    return (<div>
    <div className="navbar navbar-default">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div className="navbar-header">
          <a className="navbar-brand" href="#/about"><h3 className="hidden-xs">CRUD Angular react application</h3><span className="visible-xs">CRUD Angular react application</span></a>
        </div>
        <div className="navbar-collapse collapse navbar-responsive-collapse">
 <ul className="nav navbar-nav navbar-right" >
    <li>
      <a href="javascript:void(0)" className="btn btn-link navbar-brand" onClick={this.handleClick}>Logout</a>
    </li>
  </ul>
  </div>
      </div>
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sucessfully updated details</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.redirectToHome} data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
    <div className="well col-md-6 col-lg-6 col-xs-12 col-sm-6">
              <h3>Edit User Detail</h3><br/>
              <form>
              <label>Username</label><input type="text" className="form-control" ref="username" defaultValue={this.state.username} required="true"/><br/>
              <label>Password</label><input required="true" className="form-control" ref="password" type="password" defaultValue={this.state.password}/> <br/>
              <label>Email</label><input type="email" className="form-control" disabled="true" required="true" defaultValue={this.state.email}/><br/>
              <label>City</label><input  required="true" className="form-control" ref="city" defaultValue={this.state.city}/><br/>
              <button type="button" onClick={this.updateProfile} className="btn btn-primary">Submit</button>              </form>
            </div>
            </div>)
  }
})