const { context } = require('../base')

module.exports = function (API) {
  class MainEntityOfPage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MainEntityOfPage] })
}