import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-publish-service', 'Integration | Component | form publish service', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{form-publish-service}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#form-publish-service}}
      template block text
    {{/form-publish-service}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
