const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class XRay extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [XRay] })
}