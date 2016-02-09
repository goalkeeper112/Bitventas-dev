var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true, required: true },
    email     : { type: 'email',  unique: true, required: true },
    first_name: { type: 'string', required: true },
    last_name: { type: 'string', required: true },
    country: { type: 'string', required: true },
    profile_photo: { type: 'string'},
    picture_background: { type: 'string' },
    ranking: {type: 'json'},
    //passports : { collection: 'Passport', via: 'user' }
  }
};

module.exports = User;
