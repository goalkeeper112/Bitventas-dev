import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),

  user_buy: DS.hasMany('user'),

  user_seller: DS.hasMany('user'),

  price_btc: DS.attr('number'),

  object_id: DS.attr('string'),

  pvk_buyer: DS.attr('string'),

  pvk_seller: DS.attr('string'),

  pvk_security: DS.attr('string'),

  state: DS.attr('boolean', {
    defaultsValue: false
  }),

  invoice: DS.attr('string')
});
