const { context } = require('../base')

module.exports = function (API) {
  class BoardingGroup extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [BoardingGroup] })
}