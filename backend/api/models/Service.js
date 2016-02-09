/**
* Service.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true
    },

    description: {
      type: "string",
      required: true
    },

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

    price: {
      type: 'float',
      required: false
    },

    currency: {
      type: 'string',
      required: false
    },

    questions: {
      collection: 'question',
      via: 'services'
    },

    photo_1: {
      type: "string",
      required: true
    },

    photo_2: {
      type: "string",
      required: false
    },

    photo_3: {
      type: "string",
      required: false
    },

    photo_4: {
      type: "string",
      required: false
    },

    latitude: {
      type: "float",
      required: false
    },

    longitude: {
      type: "float",
      required: false
    }
  }
};
