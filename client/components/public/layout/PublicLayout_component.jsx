PublicLayout = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    header: React.PropTypes.element.isRequired,
    nav: React.PropTypes.element,
    content: React.PropTypes.element.isRequired,
    footer: React.PropTypes.element.isRequired
  },

  componentDidMount() {
    if (this.props.title) {
      document.title = GLOBALS.BASETITLE+' - '+this.props.title;
    } else {
      document.title = GLOBALS.BASETITLE;
    }

  },

  render() {
    return (
      <div className="body">
        {this.props.header}
        {this.props.nav}
        <div className="main-content container margin-top">
          {this.props.content}
        </div>
        {this.props.footer}
      </div>
    )
  }
})
