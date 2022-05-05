const { context } = require('../base')

module.exports = function (API) {
  class IswcCode extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IswcCode] })
}