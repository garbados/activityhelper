const { context } = require('../base')

module.exports = function (API) {
  class IupacName extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IupacName] })
}