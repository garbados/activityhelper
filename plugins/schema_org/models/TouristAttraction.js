const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class TouristAttraction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [TouristAttraction] })
}