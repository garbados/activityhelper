const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class Bone extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [Bone] })
}