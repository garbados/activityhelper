const { context } = require('../base')

module.exports = function (API) {
  class BioChemSimilarity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BioChemSimilarity] })
}