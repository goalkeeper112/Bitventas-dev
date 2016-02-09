import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('service');
  this.route('product');
  this.route('product-publish', {
    path: 'product/publish'
  });
  this.route('service-publish', {
    path: 'service/publish'
  });
  this.route('products');
  this.route('services');
  this.route('login');
  this.route('register');
});

export default Router;
