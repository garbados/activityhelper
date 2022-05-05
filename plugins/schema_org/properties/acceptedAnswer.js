const { context } = require('../base')

module.exports = function (API) {
  class AcceptedAnswer extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AcceptedAnswer] })
}