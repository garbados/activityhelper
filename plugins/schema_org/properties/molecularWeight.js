const { context } = require('../base')

module.exports = function (API) {
  class MolecularWeight extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MolecularWeight] })
}