const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Vessel extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Vessel] })
}