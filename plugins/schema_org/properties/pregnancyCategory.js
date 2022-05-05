const { context } = require('../base')

module.exports = function (API) {
  class PregnancyCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PregnancyCategory] })
}