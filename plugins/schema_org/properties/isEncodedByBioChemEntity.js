const { context } = require('../base')

module.exports = function (API) {
  class IsEncodedByBioChemEntity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsEncodedByBioChemEntity] })
}