const { context } = require('../base')

module.exports = function (API) {
  class Id extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Id] })
}