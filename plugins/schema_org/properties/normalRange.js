const { context } = require('../base')

module.exports = function (API) {
  class NormalRange extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NormalRange] })
}