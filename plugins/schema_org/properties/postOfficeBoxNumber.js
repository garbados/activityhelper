const { context } = require('../base')

module.exports = function (API) {
  class PostOfficeBoxNumber extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PostOfficeBoxNumber] })
}