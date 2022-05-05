const { context } = require('../base')

module.exports = function (API) {
  class RegionsAllowed extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RegionsAllowed] })
}