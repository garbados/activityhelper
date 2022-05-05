const { context } = require('../base')

module.exports = function (API) {
  class Parent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Parent] })
}