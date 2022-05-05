const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class BedAndBreakfast extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [BedAndBreakfast] })
}