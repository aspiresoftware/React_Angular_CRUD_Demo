'use strict';
const Register = React.createClass({
  render() {
    return <Form/>
  }
})

const Form = React.createClass({
  getInitialState() {
	  return {
		  username:'',
		  password:'',
		  city:'',
		  state:'',
		  errorText:{uname:'',pwd:'',city:'',errorText:''},
	  };
  },
  handleSubmit(event) {
    event.preventDefault();
    var registerUsers = localStorage.getItem('registerUsers');
    var duplicateAccount = false;
    if (registerUsers !== null) {
      registerUsers = JSON.parse(registerUsers);
      if(registerUsers[this.refs.email.value]){
        duplicateAccount = true;
       jQuery('#myModal').modal('show');
        return;
      }
          } 
    if(!duplicateAccount){
      this.setCredentials();
      // this.history.replaceState(null, '/');
      this.props.redirectToHome();
    }

  },
  setCredentials() {
    var credentials = localStorage.getItem('credentials'),users = {};
    users.email = this.refs.email.value;
    users.password = this.refs.pwd.value;
    if(credentials === null) {
      credentials = [];
      credentials.push(users);
    } else {
      credentials = JSON.parse(credentials);
      credentials.push(users);
    }
    localStorage.setItem('credentials',JSON.stringify(credentials));
    this.setRegistration(users.email);
  },
  setRegistration(email) {
    var registerUsers = localStorage.getItem('registerUsers'),users = {};

    if(registerUsers === null) {
      registerUsers = {};
      registerUsers.email= this.refs.email.value;
      registerUsers.username= this.refs.uname.value;
      registerUsers.password= this.refs.pwd.value;
      registerUsers.city = this.refs.city.value;
      users[email] = registerUsers;
    } else {
      users = JSON.parse(registerUsers);
      users[email] = {};
      users[email].email= this.refs.email.value;
      users[email].username= this.refs.uname.value;
      users[email].password= this.refs.pwd.value;
      users[email].city = this.refs.city.value;
    }
    localStorage.setItem('registerUsers',JSON.stringify(users));
  },
  render() {
  return <div>
  <div className="navbar navbar-default">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div className="navbar-header">
          <a className="navbar-brand" href="#/home"><h3 className="hidden-xs">CRUD Angular react application</h3><span className="visible-xs">CRUD Angular react application</span></a>
        </div>
        <ul className="nav pull-right" >
          <li>
            <a href="javascript:void(0)" className="btn btn-link navbar-brand" ></a>
          </li>
        </ul>
      </div>
  <div className="well col-sm-6 col-md-6 col-lg-6 col-xs-12">
  	<div className="modal fade" id="myModal">
  		<div className="modal-dialog">
  			<div className="modal-content">
  				<div className="modal-header">
  					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
  					<h4 className="modal-title">Account with email id is already made, please use different email address</h4>
  				</div>
  				<div className="modal-footer">
  					<button type="button" className="btn btn-default" data-dismiss="modal">Ok</button>
  				</div>
  			</div>
  		</div>
  	</div>
  	<form onSubmit={this.handleSubmit}>
  	UserName<br/>
  	<input type="text" className="form-control" ref="uname" required/><br/>
  	Password<br/>
  	<input type="password" className="form-control" ref="pwd" required/><br/>
  	City<br/>
  	<input type="text" className="form-control" ref="city" required/><br/>
  	Email<br/>
  	<input type="email" ref="email" className="form-control" required/><br/>
  	<button className="btn btn-primary">Submit</button>
</form>
</div>
<div  className="clearfix"></div>
</div>
  }
});