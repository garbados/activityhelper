const { context } = require('../base')

module.exports = function (API) {
  class SchoolClosuresInfo extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [SchoolClosuresInfo] })
}