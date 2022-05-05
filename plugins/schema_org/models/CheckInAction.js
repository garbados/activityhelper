const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CheckInAction extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CheckInAction] })
}