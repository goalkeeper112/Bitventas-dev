/**
* Qualification.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    text_qualification: {
      type: "string",
      required: true
    },

    user_from: {
      model: "user",
      required: true
    },

    user_to: {
      model: "user",
      required: true
    },

    value_qualification: {
      type: "integer"
    }
  }
};
