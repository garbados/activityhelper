const { context } = require('../base')

module.exports = function (API) {
  class ChemicalComposition extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ChemicalComposition] })
}