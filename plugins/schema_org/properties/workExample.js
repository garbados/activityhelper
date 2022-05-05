const { context } = require('../base')

module.exports = function (API) {
  class WorkExample extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkExample] })
}