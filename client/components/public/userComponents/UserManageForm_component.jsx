UserManageForm = React.createClass({

  render() {
    var bloodGroupOptions = [
      { value: "4aasd15x", title: "A+"},
      { value: "4a5s1xz2", title: "B+"},
    ];
    return(
      <div className="register-form ">
        <Form id="register-form" submit={this.submitRegistration}>
          <div className="row">
            <div className="col-md-6">
              <Form.Text name="name" label="Name" id="name" refs='name'
                onChange={this.props.onChange}
                val={this.props.formData.name}
                required={true}  />
              <Form.Select name="bloodGroupId" id="bloodGroupId" label="Blood Group"
                onChange={this.props.onChange}
                options={bloodGroupOptions}
                />

              <Form.Date name="date_of_birth" label="Date of Birth" id="date_of_birth"
                onChange={this.props.onChange}/>
              <Form.Text name="contactNo" label="Contact No" id="contactNo"
                onChange={this.props.onChange} />

            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor=""><small>Mark on Map</small></label>
                <GoogleMaps height="270px" geo={true} myLocation={this.props.myLocation}/>
              </div>
            </div>
            {/*
            <div className="col-md-12">
              <hr/>
              <h5><strong>Address</strong> <small>Optional - If you fill this, It will be helpful to find you. </small></h5>
              <div className="row">
                <div className="col-md-4">
                  <Form.Text name="locality" label="Locality" id="locality"
                    onChange={this.props.onChange} />
                </div>
                <div className="col-md-4">
                  <Form.Text name="city" label="City" id="city"
                    onChange={this.props.onChange} />
                </div>
                <div className="col-md-4">
                  <Form.Text name="district" label="District" id="district"
                    onChange={this.props.onChange} />
                </div>
                <div className="col-md-4">
                  <Form.Text name="state" label="State" id="state"
                    onChange={this.props.onChange} />
                </div>
                <div className="col-md-4">
                  <Form.Text name="country" label="Country" id="country"
                      onChange={this.props.onChange} />
                </div>
                <div className="col-md-4">
                  <Form.Text name="pincode" label="Pin Code" id="pincode"
                    onChange={this.props.onChange} />
                </div>
              </div>
            </div>*/}
          </div>
          <div className="text-center">
            <Form.SingleCheckbox name="anyTimeReady" label="I am ready to donate any time"
              id="anyTimeReady"
              inputChange={this.onAnyTimeRadyChange}/>
          </div>
        </Form>
      </div>
    );
  }
})
