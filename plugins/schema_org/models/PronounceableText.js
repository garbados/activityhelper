const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class PronounceableText extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [PronounceableText] })
}