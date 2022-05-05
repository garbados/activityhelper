const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RandomizedTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RandomizedTrial] })
}