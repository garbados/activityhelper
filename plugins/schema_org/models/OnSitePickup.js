const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class OnSitePickup extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [OnSitePickup] })
}