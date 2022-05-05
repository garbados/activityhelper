const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SingleCenterTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SingleCenterTrial] })
}