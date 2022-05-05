const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HousePainter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HousePainter] })
}