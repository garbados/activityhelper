const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ReturnLabelDownloadAndPrint extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ReturnLabelDownloadAndPrint] })
}