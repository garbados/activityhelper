const { context } = require('../base')

module.exports = function (API) {
  class MolecularFormula extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MolecularFormula] })
}