const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BarOrPub extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BarOrPub] })
}