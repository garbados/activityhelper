const { context } = require('../base')

module.exports = function (API) {
  class Target extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Target] })
}