const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AnimalShelter extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AnimalShelter] })
}