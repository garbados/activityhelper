const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class HowToTip extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [HowToTip] })
}