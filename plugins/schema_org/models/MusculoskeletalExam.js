const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class MusculoskeletalExam extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [MusculoskeletalExam] })
}