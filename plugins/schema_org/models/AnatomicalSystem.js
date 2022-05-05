const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AnatomicalSystem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AnatomicalSystem] })
}