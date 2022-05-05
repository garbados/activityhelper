const { context } = require('../base')

module.exports = function (API) {
  class IsFamilyFriendly extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsFamilyFriendly] })
}