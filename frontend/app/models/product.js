import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  description: DS.attr('string'),

  seller: DS.hasMany('user'),

  country: DS.attr('string'),

  state: DS.attr('string'),

  city: DS.attr('string'),

  price: DS.attr('number'),

  currency: DS.attr('string'),

  condition: DS.attr('boolean', {
    defaultValue: false
  }),

  units: DS.attr('number'),

  questions: DS.hasMany('question'),

  photo_1: DS.attr('string'),

  photo_2: DS.attr('string'),

  photo_3: DS.attr('string'),

  photo_4: DS.attr('string'),

  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
