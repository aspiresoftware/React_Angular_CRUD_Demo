'use strict';
const Delete = React.createClass({
  showDialog() {
    $('#myModal').modal('show');
  },
  dismissDialog() {
   $('#myModal').modal('hide');
  },
  deleteAccont() {
    this.dismissDialog();
    this.deleteDetail();
  },
  deleteDetail() {
      var email = localStorage.getItem('currentUser');
      var users = JSON.parse(localStorage.getItem('credentials'));
      for (var i = users.length - 1; i >= 0; i--) {
        if(users[i].email === email) {
            users.splice(i,1);
            users = users;
            localStorage.setItem('credentials',JSON.stringify(users));
            break;
        }
      };
      users = JSON.parse(localStorage.getItem('registerUsers'));
      delete users[email]
      localStorage.setItem('registerUsers',JSON.stringify(users));
      auth.logout();
      this.redirectToHome();
  },
  redirectToHome:function(){
    window.location.hash = '#/home';
  },
  handleClick:function(){
    auth.logout();
    this.redirectToHome();
  },
  render() {
    return (<div>
<div className="modal fade" id="myModal">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Are you sure want to delete account?</h4>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.dismissDialog} data-dismiss="modal">No</button>
                <button type="button" className="btn btn-default" onClick={this.deleteAccont}>Yes</button>
            </div>
        </div>
    </div>
</div>
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
              <a href="javascript:void(0)" onClick={this.showDialog} className="btn btn-danger">Delete My Account</a>
            </div>)
          }
})
