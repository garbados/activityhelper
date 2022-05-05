const { context } = require('../base')

module.exports = function (API) {
  class ContactPoints extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ContactPoints] })
}