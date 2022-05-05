const { context } = require('../base')

module.exports = function (API) {
  class Maintainer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Maintainer] })
}