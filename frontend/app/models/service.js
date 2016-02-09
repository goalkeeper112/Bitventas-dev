import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  description: DS.attr('string'),

  seller: {
    model: 'user',
    required: true
  },

  country: {
    type: 'string',
    required: true
  },

  state: {
    type: 'string',
    required: true
  },

  city: {
    type: 'string',
    required: true
  },

  price: DS.attr('number'),

  currency: DS.attr('string'),

  questions: DS.hasMany('question'),

  photo_1: DS.attr('string'),

  photo_2: DS.attr('string'),

  photo_3: DS.attr('string'),

  photo_4: DS.attr('string'),

  latitude: DS.attr('number'),

  longitude: DS.attr('number')
});
