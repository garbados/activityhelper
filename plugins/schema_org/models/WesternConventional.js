const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class WesternConventional extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [WesternConventional] })
}