const { context } = require('../base')

module.exports = function (API) {
  class MainEntity extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [MainEntity] })
}