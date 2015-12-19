/*jshint esnext: true */

function renderPublicLayoutWith(component, title=null) {
  ReactLayout.render(PublicLayout, {
    title: title,
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}

FlowRouter.route("/", {
  name: 'landing',
  action(params) {
    title= 'Login or Register to continue';
    renderPublicLayoutWith(<LandingPage />, title);
  }
});


FlowRouter.route("/login", {
  name: 'Login',
  action(params) {
    renderPublicLayoutWith( <Login /> );
  }
});

FlowRouter.route("/register", {
  name: 'Register',
  action(params) {
    renderPublicLayoutWith( <Register /> );
  }
});

FlowRouter.route("/home", {
  name: 'Home',
  action(params) {
    renderPublicLayoutWith(<Home />);
  }
});
