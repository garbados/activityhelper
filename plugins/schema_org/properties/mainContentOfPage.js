const { context } = require('../base')

module.exports = function (API) {
  class MainContentOfPage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MainContentOfPage] })
}