const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowToSection extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowToSection] })
}