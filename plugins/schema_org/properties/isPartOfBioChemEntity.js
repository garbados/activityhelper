const { context } = require('../base')

module.exports = function (API) {
  class IsPartOfBioChemEntity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsPartOfBioChemEntity] })
}