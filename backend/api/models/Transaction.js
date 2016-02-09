/**
* Transaction.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    type: {
      type: "string",
      required: true
    },

    user_buy: {
      model: "user",
      required: true
    },

    user_seller: {
      model: "user",
      required: true
    },

    price_btc: {
      type: "float",
      required: true
    },

    object_id: {
      type: "string"
    },

    pvk_buyer: {
      type: "string",
      unique: true
    },

    pvk_seller: {
      type: "string",
      unique: true
    },

    pvk_security: {
      type: "string",
      unique: true
    },

    state: {
      type: "boolean",
      defaultsTo: false
    },

    invoice: {
      type: "string"
    }
  }
};
