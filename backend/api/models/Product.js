/**
* Product.js
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
      required: true
    },

    currency: {
      type: 'string',
      required: true
    },

    condition: {
      type: 'boolean',
      required: true,
      defaultsTo: true
    },

    units: {
      type: 'integer',
      required: true
    },

    questions: {
      collection: 'question',
      via: 'products'
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

    createdAt: {
      type: "datetime",
      defaultsTo: new Date()
    }
  }
};
