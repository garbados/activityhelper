const { context } = require('../base')

module.exports = function (API) {
  class MonoisotopicMolecularWeight extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MonoisotopicMolecularWeight] })
}