const { context } = require('../base')

module.exports = function (API) {
  class NonEqual extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NonEqual] })
}