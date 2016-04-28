import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    accessDenied: function() {
      this.transitionTo('signin');
    },
    signin: function(){
      this.get('session').open('arcgis-oauth-bearer')
        .then((authorization) => {
          Ember.debug('AUTH SUCCESS: ', authorization);
          //transition to some secured route or... so whatever is needed
          //this.controller.transitionToRoute('secure');
        })
        .catch((err)=>{
          Ember.debug('AUTH ERROR: ', err);
        });
    },
    signout: function() {
      //kill the session...
      this.get('session').close();
      //transition to the home page
      this.transitionTo('index');

    }
  }
});
