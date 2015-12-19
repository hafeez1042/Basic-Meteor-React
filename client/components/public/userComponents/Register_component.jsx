Register = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      coords: {
        lat: 8.9539806,
        lon: 76.3249756
      },
      formData: {}
    }
  },
  componentDidMount() {

    // this.setCurrentGeoLocation();
    /*this.setState({
      label: 'newState',
      coords: {
        lat: 11.002114,
        lon: 76.1554
      }
    });*/
  },

  getMeteorData() {
    return {
      loaded: 'asdasd',//GoogleMaps.loaded(),
      mapOptions: 'asdasd'//GoogleMaps.loaded() && this._mapOptions()
    };
  },

  submitRegistration(e) {
    e.preventDefault();
    console.log(this.state);

    var registrationData = {

    }
  },

  onChange(e) {
    var value = e.target.value;
    var name = e.target.name;
    this.state.formData[name] = value;
    return this.setState({
      formData: this.state.formData
    });
  },
  myLocation(location) {
    console.log(location);

  },
  render() {
    var bloodGroupOptions = [
      { value: "4aasd15x", title: "A+"},
      { value: "4a5s1xz2", title: "B+"},
    ];

    return (
      <div className="container main register text-center">
        <div className="row ">
          <div className="col-md-12">
            <div className="logo">
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <h5 className="header-line">COMPLETE YOUR REGISTRATION</h5>
          </div>
        </div>
        <UserManageForm
          onChange={this.onChange}
          formData={this.state.formData}
          myLocation={this.myLocation}
          />
        <div className="tnc text-center">
          <h6><strong>Term and Conditions</strong></h6>
          <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quae ipsum quia voluptate commodi ad tenetur, quasi maxime repudiandae laboriosam quod autem dolorem ea officiis animi nihil cupiditate veritatis reiciendis iure cumque tempora dolores odit eos. Est, perferendis. Aperiam ex, eveniet corrupti odio? Suscipit rerum dignissimos, sed nisi asperiores. Minima incidunt fugiat cumque consequuntur culpa earum deserunt. <a href="">Read more...</a></p>

        </div>
      </div>
    );
  }
});
