const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Drawing extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Drawing] })
}