const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LaserDiscFormat extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LaserDiscFormat] })
}