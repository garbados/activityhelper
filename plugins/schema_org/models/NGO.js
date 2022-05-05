const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class NGO extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [NGO] })
}