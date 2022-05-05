const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SchemaOrg3DModel extends SchemaOrgObject {
    static type = '3DModel'
    // TODO
  }

  API.addContext(SchemaOrgObject.context, { models: [SchemaOrg3DModel] })
}