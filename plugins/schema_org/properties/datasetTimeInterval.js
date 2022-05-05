const { context } = require('../base')

module.exports = function (API) {
  class DatasetTimeInterval extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [DatasetTimeInterval] })
}