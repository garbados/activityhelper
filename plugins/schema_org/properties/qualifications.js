const { context } = require('../base')

module.exports = function (API) {
  class Qualifications extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [Qualifications] })
}