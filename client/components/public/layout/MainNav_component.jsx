MainNav = React.createClass({
  PropTypes: {
    state: React.PropTypes.bool
  },
  componentDidMount() {

  },
  navState() {
    if (this.props.state) {
      $('.main-content').addClass('extra');
      return "main-user-nav active";
    }
    $('.main-content').removeClass('extra');
    return "main-user-nav";
  },

  render() {
    return(
      <nav className={this.navState()} >
        <div className="container">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-home"></i>
                <div className="text">Home</div>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-user"></i>
                <div className="text">Profile</div>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-gratipay"></i>
                <div className="text">Tips</div>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-connectdevelop"></i>
                <div className="text">Connections</div>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-gear"></i>
                <div className="text">Settings</div>
              </a>
            </li>
          </ul>
        </div>
    	</nav>
    );
  }
})
