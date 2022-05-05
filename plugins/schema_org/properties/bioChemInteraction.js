const { context } = require('../base')

module.exports = function (API) {
  class BioChemInteraction extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BioChemInteraction] })
}