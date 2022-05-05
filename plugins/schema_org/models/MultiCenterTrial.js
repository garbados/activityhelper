const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MultiCenterTrial extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MultiCenterTrial] })
}