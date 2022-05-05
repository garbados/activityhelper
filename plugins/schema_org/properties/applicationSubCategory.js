const { context } = require('../base')

module.exports = function (API) {
  class ApplicationSubCategory extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [ApplicationSubCategory] })
}