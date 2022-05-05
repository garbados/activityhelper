const { context } = require('../base')

module.exports = function (API) {
  class Title extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Title] })
}