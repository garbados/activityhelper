const { context } = require('../base')

module.exports = function (API) {
  class JobImmediateStart extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [JobImmediateStart] })
}