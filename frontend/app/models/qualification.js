import DS from 'ember-data';

export default DS.Model.extend({
  text_qualification: DS.attr('string'),

  user_from: DS.hasMany('user'),

  user_to: DS.hasMany('user'),

  value_qualification: DS.attr('number')
});
