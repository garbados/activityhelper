const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class ProfilePage extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [ProfilePage] })
}