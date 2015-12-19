Login = React.createClass({


  fbLogin() {
    console.log('click fb')
    Meteor.loginWithFacebook({
      //requestPermissions: ['user', 'public_repo']
    }, function (err) {
      if (err){
        console.log(err);
        // Session.set('errorMessage', err.reason || 'Unknown error');
      } else {
        if (Meteor.user().registrationCompleted) {
          FlowRouter.go("Home");
        } else {
          console.log("Please Complete Registration");

          FlowRouter.go("Register");
        }
      }
    });
  },

  gPlusLogin() {
    console.log('click gplus');
    Meteor.loginWithGoogle({
      //requestPermissions: ['user', 'public_repo']
    }, function (err) {
      if (err){
        console.log(err);
        //Session.set('errorMessage', err.reason || 'Unknown error');
      } else {
        if (Meteor.user().registrationCompleted) {
          FlowRouter.go("Home");
        } else {
          console.log("Please Complete Registration");

          FlowRouter.go("Register");
        }
      }
    });
  },

  twitterLogin() {
    console.log('click twitter')
    Meteor.loginWithTwitter({
        //requestPermissions: ['user', 'public_repo']
      }, function (err) {
        if (err) {
          console.log(err);
          //Session.set('errorMessage', err.reason || 'Unknown error');
        } else {
          if (Meteor.user().registrationCompleted) {
            FlowRouter.go("Home");
          } else {
            console.log("Please Complete Registration");

            FlowRouter.go("Register");
          }
        }
      }
    );
  },

  render() {
    return(
      <div className="container main login">
        <div className="text-center" >
          <div className="row pad-botm">
            <div className="col-md-12">
              <div className="logo">
                <img src="/images/logo.svg" alt="logo" />
              </div>
              <h4 className="header-line">LOGIN OR REGISTER</h4>
            </div>
          </div>
          <div className="buttons">
            <button type="button" onClick={this.fbLogin} className="btn btn-default btn-lg ">
              <span className="fa fa-facebook"></span>
              <span className="text">facebook</span>
            </button>
            <button type="button" onClick={this.gPlusLogin} className="btn btn-default btn-lg ">
              <span className="fa fa-google-plus"></span>
              <span className="text">GooglePlus</span>
            </button>
            <button type="button" onClick={this.twitterLogin} className="btn btn-default btn-lg ">
              <span className="fa fa-twitter"></span>
              <span className="text">twitter</span>
            </button>
          </div>
          <div className="tnc text-center">
            <h6><strong>Term and Conditions</strong></h6>
            <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quae ipsum quia voluptate commodi ad tenetur, quasi maxime repudiandae laboriosam quod autem dolorem ea officiis animi nihil cupiditate veritatis reiciendis iure cumque tempora dolores odit eos. Est, perferendis. Aperiam ex, eveniet corrupti odio? Suscipit rerum dignissimos, sed nisi asperiores. Minima incidunt fugiat cumque consequuntur culpa earum deserunt. <a href="">Read more...</a></p>

          </div>
        </div>
      </div>
    )
  }
})
