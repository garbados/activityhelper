const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnLabelInBox extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnLabelInBox] })
}