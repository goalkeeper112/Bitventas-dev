import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.hasMany('user'),

  text: DS.attr('string'),

  state: DS.attr('boolean', {
    defaultsValue: false
  }),

  products: DS.belongsTo('product'),

  services: DS.belongsTo('service')
});
