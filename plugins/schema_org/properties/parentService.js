const { context } = require('../base')

module.exports = function (API) {
  class ParentService extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ParentService] })
}