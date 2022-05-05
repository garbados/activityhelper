const { context } = require('../base')

module.exports = function (API) {
  class Smiles extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Smiles] })
}