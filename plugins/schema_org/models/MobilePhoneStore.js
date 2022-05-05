const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MobilePhoneStore extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MobilePhoneStore] })
}