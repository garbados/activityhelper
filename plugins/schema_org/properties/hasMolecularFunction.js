const { context } = require('../base')

module.exports = function (API) {
  class HasMolecularFunction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasMolecularFunction] })
}