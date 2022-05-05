const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Car extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Car] })
}