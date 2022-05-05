const { context } = require('../base')

module.exports = function (API) {
  class PrimaryImageOfPage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PrimaryImageOfPage] })
}