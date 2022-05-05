const { context } = require('../base')

module.exports = function (API) {
  class HasBioChemEntityPart extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasBioChemEntityPart] })
}