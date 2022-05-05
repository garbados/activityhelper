const { context } = require('../base')

module.exports = function (API) {
  class EncodesBioChemEntity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [EncodesBioChemEntity] })
}