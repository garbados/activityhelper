const { context } = require('../base')

module.exports = function (API) {
  class RealEstateAgent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RealEstateAgent] })
}