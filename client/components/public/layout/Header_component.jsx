Header = React.createClass({

  getInitialState() {
    return({

    })
  },
  render() {
    var userImage = {
      backgroundImage: "url(/images/dummy/dp.jpg)"
    }
    return (
      <header className="main">

        <nav className="navbar">
          <div className="container">
            <div className="">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="navbar-hamburger">
                  <div className="nav-hamburger-icon" ref="toggleNav" onClick={this.toggleHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <a className="navbar-brand" href="#">Brand</a>
                <div className="navbar-search" >
                  <form className="navbar-form-search navbar-left" role="search">
                    <div className="form-group search-form-group" ref="searchForm">
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="button" className="btn btn-search no-outline" onClick={this.toggleSearch}><div className="fa fa-search"></div></button>
                  </form>
                </div>
                <ul className="nav navbar-nav navbar-primary navbar-right">

                  <li><a href="#"><i className="fa fa-bell-o"></i></a></li>
                  <li><a href="#"><i className="fa fa-envelope-o"></i></a></li>
                  <li className="dropdown user-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <div className="img" style={userImage}></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <MainNav state={this.state.mainNav} />

      </header>
    )
  },
  toggleHamburger() {
    $(this.refs.toggleNav).toggleClass('open');
    this.setState({
      mainNav: !this.state.mainNav,
    })
  },

  toggleSearch() {
    return false
    var searchForm = this.refs.searchForm;
    if ($(searchForm).width() > 0 ) {
      $(searchForm).removeClass('active');
      $(searchForm).width(0);
    } else {
      $(searchForm).addClass('active');
      $(searchForm).width(200);
    }
  }
});
