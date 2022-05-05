const { context } = require('../base')

module.exports = function (API) {
  class WorkFeatured extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkFeatured] })
}