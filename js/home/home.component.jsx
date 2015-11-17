'use strict';
const NoElement = React.createClass({
  render:function(){
    return;
  }
});
const NavBar = React.createClass({
  render:function() {
  return <div className="navbar navbar-default">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div className="navbar-header">
          <a className="navbar-brand" href="#/home"><h3>CRUD Angular react application</h3></a>
        </div>
        <ul className="nav navbar-nav pull-right" disabled={auth.getToken}>
          <li>
            <a href="javascript:void(0)" className="btn btn-flat btn-primary">Logout</a>
          </li>
        </ul>
      </div>
  }
})
const App = React.createClass({


  componentWillMount() {
    // auth.onChange = this.updateAuth
    auth.login()
  },
  getInitialState:function() {
    return {
      error:false
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    const email = this.refs.email.value
    const pass = this.refs.password.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn)
        return this.setState({ error: true })
      else {
        this.setState({error:false})
      }
      const { location } = this.props
      this.props.handleSubmit();
      // if (location.state && location.state.nextPathname) {
      //   this.history.replaceState(null, location.state.nextPathname)
      // } else {
      //   this.history.replaceState(null, '/about')
      // }
    })
  },
  render() {
    return (
    <div >
    <div className="navbar navbar-default">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div className="navbar-header">
          <a className="navbar-brand" href="javascript:void(0)"><h3 className="hidden-xs">CRUD Angular react application</h3><span className="visible-xs">CRUD Angular react application</span></a>
        <ul className="nav pull-right" >
          <li>
            <a href="javascript:void(0)" className="btn btn-link navbar-brand" ></a>
          </li>
        </ul>
        </div>
        
      </div>
     <div style={{'margin':'auto'}}>
    <form className="form-horizontal well col-lg-6 col-md-6 col-sm-6 col-xs-12" onSubmit={this.handleSubmit}>
    <fieldset>
      <legend>Login</legend>
      <div className="form-group">
        <label htmlFor="inputEmail" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 control-label">Email</label>
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <input type="email" ref="email" className="form-control col-lg-6 col-md-6 col-sm-6 col-xs-6" id="inputEmail" placeholder="Email"/>
        </div>
        <br/>
        <label htmlFor="inputPassword" className="col-sm-2 col-md-2 col-xs-2 col-lg-2 control-label">Password</label>
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
          <input type="password" ref="password" className="form-control col-lg-6 col-md-6 col-sm-6 col-xs-6" id="inputPassword" placeholder="Password"/>
          <br/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-10 col-lg-offset-2">
          <button type="submit" className="btn btn-primary">Submit</button>
          <a href="#/register" className="btn btn-flat btn-primary">Register</a>
        </div>
      </div>
    </fieldset>
{this.state.error && (<span className="label label-danger">Please enter valid credentials</span>)}
  </form>
  <div className="clearfix"></div>
  </div>
</div>
    )
  }

})