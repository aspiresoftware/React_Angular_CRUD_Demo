var About = React.createClass({
  render:function() {
  return <div><div className="navbar navbar-default">
  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
  	<span className="icon-bar"></span>
  	<span className="icon-bar"></span>
  	<span className="icon-bar"></span>
  </button>
  <div className="navbar-header">
  	<a className="navbar-brand" href="javascript:void(0)"><h3 className="hidden-xs">CRUD Angular react application</h3><span className="visible-xs">CRUD Angular react application</span></a>
  </div>
<div className="navbar-collapse collapse navbar-responsive-collapse">
 <ul className="nav navbar-nav navbar-right" >
    <li>
      <a href="javascript:void(0)" className="btn btn-link navbar-brand" onClick={this.handleClick}>Logout</a>
    </li>
  </ul>
  </div>  
</div>
<a href="#/edit" className="btn btn-primary">Edit Detail</a>
<br/>
<a href="#/delete" className="btn btn-danger">Delete Account</a>
</div>
  },
  handleClick:function(event) {
  	auth.logout();
  	this.props.handleSubmit();
  }
})