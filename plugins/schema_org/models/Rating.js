const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Rating extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Rating] })
}