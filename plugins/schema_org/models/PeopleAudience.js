const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PeopleAudience extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PeopleAudience] })
}