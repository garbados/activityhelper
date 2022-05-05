const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class SpreadsheetDigitalDocument extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [SpreadsheetDigitalDocument] })
}