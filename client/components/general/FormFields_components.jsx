Form = React.createClass({
  propTypes: {
    id   : React.PropTypes.string.isRequired
  },
  render() {
    return(
      <form action="" id={this.props.id} onSubmit={this.props.submit}>
        {this.props.children}
        <div className="text-center">
          <button className="btn btn-default">
            SUBMIT
          </button>

        </div>
      </form>
    )
  }
});

Form.Text = React.createClass({
  getDefaultProps() {
    return {
      required: false,
    }
  },

  propTypes:{
    name   : React.PropTypes.string.isRequired,
    label  : React.PropTypes.string.isRequired,
    id     : React.PropTypes.string.isRequired,
    error  : React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    required: React.PropTypes.bool

  },
  dynamicClass() {
    if (this.props.error) {
      return 'form-group has-error';
    } else {
      return 'form-group';
    }
  },
  render() {
    if (this.props.required) {
      var required = {
        required: true
      }
    }
    return (
      <div className={this.dynamicClass()}>
        <label className="" htmlFor={this.props.id}><small>{this.props.label}</small></label>
        <input type="text"
          className="form-control"
          id={this.props.id}
          name={this.props.name}
          value={this.props.val}
          {...required}
          onChange={this.props.onChange} />
        <span id="helpBlock2" className="help-block">{this.props.errorMessage}</span>
      </div>
    )
  }
});

Form.Select = React.createClass({
  getDefaultProps() {
    return {
      required: false,
    }
  },
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    required: React.PropTypes.bool
  },

  options() {
    return this.props.options.map(function (option) {
      return (
        <option value={option.value} key={option.value} >
          {option.title}
        </option>
      )
    })
  },
  render() {
    if (this.props.required) {
      var required = {
        required: true
      }
    }
    return (
      <div className="form-group">
        <label className="" htmlFor={this.props.id}><small>{this.props.label}</small></label>
        <select defaultValue="disabled"
          name={this.props.name}
          id={this.props.id}
          onChange={this.props.onChange}
          {...required}
          className="form-control">
          <option disabled value="disabled" key='empty' >Please Select One</option>
          {this.options()}
        </select>
      </div>
    )
  }
});

Form.Date = React.createClass({
  getDefaultProps() {
    return {
    }
  },
  propTypes:{
    name   : React.PropTypes.string.isRequired,
    label  : React.PropTypes.string.isRequired,
    id     : React.PropTypes.string.isRequired,
    error  : React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    required: React.PropTypes.bool

  },
  componentDidMount() {
    $(this.refs.datepicker).datetimepicker({
      format: 'MM/DD/YYYY'
    });
  },
  dynamicClass() {
    if (this.props.error) {
      return 'form-group has-error ';
    } else {
      return 'form-group ';
    }
  },
  render() {
    if (this.props.required) {
      var required = {
        required: true
      }
    }
    style = {
      position: 'relative'
    }
    return (
      <div className={this.dynamicClass()} style={style} >
        <label className="" htmlFor={this.props.id}><small>{this.props.label}</small></label>
        <input type="text"
          className="form-control datepicker"
          ref="datepicker"
          id={this.props.id}
          name={this.props.name}
          value={this.props.val}
          onChange={this.props.onChange}
          onBlur={this.props.onChange}
          {...required} />
        <span id="helpBlock2" className="help-block">{this.props.errorMessage}</span>
      </div>
    )
  }
});

Form.SingleCheckbox = React.createClass({
  getDefaultProps() {
    return {
      required: false,
    }
  },
  propTypes: {
    name : React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    id   : React.PropTypes.string.isRequired,
    required: React.PropTypes.bool
  },
  render() {
    if (this.props.required) {
      var required = {
        required: true
      }
    }
    return (
      <div className="form-group">
        <label className="" htmlFor={this.props.id}>
          <input type="checkbox" id={this.props.id} name={this.props.name} onChange={this.props.onChange} {...required}/>
          <small>{this.props.label}</small>
        </label>
      </div>
    )
  }
});
