const { context } = require('../base')

module.exports = function (API) {
  class Abstract extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Abstract] })
}