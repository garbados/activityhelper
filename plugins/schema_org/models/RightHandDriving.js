const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class RightHandDriving extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [RightHandDriving] })
}