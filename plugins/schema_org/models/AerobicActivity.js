const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class AerobicActivity extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [AerobicActivity] })
}