const { context } = require('../base')

module.exports = function (API) {
  class CholesterolContent extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [CholesterolContent] })
}