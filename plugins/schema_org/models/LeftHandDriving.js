const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class LeftHandDriving extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [LeftHandDriving] })
}