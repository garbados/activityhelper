const { context } = require('../base')

module.exports = function (API) {
  class Speed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Speed] })
}