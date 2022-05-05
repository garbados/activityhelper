const { context } = require('../base')

module.exports = function (API) {
  class ApplicationCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicationCategory] })
}