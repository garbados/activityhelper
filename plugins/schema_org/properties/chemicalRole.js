const { context } = require('../base')

module.exports = function (API) {
  class ChemicalRole extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ChemicalRole] })
}