const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class DryCleaningOrLaundry extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [DryCleaningOrLaundry] })
}