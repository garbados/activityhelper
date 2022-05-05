const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LaboratoryScience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LaboratoryScience] })
}