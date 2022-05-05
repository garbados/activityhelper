const { context } = require('../base')

module.exports = function (API) {
  class HasMenuItem extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasMenuItem] })
}