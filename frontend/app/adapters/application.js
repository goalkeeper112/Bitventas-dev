/*import DS from 'ember-data';

export default DS.RESTAdapter.extend( {
  coalesceFindRequests: true,   // these blueprints support coalescing (reduces the amount of requests)
  namespace: 'api/v1',               // same as API prefix in Sails config
  host: 'http://localhost:1337' // Sails server
} );*/

import SailsRESTAdapter from 'ember-data-sails/adapters/sails-rest';

export default SailsRESTAdapter.extend({
  /**
   * The host of your API
   */
  host:                 'http://localhost:1337',
  /**
   * The namespace of your API
   */
  namespace:            'api/v1',
  /**
   * Whether to use CSRF tokens or not
   */
  useCSRF:              true,
  /**
   * Whether to group multiple find by ID with one request with a `where`
   */
  coalesceFindRequests: true
});
