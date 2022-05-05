const { context } = require('../base')

module.exports = function (API) {
  class ChildMinAge extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ChildMinAge] })
}