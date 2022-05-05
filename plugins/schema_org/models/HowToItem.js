const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowToItem extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowToItem] })
}