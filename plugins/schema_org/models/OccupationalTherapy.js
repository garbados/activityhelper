const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OccupationalTherapy extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OccupationalTherapy] })
}