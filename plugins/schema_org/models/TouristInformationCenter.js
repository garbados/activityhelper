const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TouristInformationCenter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TouristInformationCenter] })
}