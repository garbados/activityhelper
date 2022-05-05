const { context } = require('../base')

module.exports = function (API) {
  class JobTitle extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [JobTitle] })
}