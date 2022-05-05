const { SchemaOrgObject } = require('../base')

module.exports = function (API) {
  class CrossSectional extends SchemaOrgObject { /* TODO */ }

  API.addContext(SchemaOrgObject.context, { models: [CrossSectional] })
}