const { context } = require('../base')

module.exports = function (API) {
  class RepresentativeOfPage extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [RepresentativeOfPage] })
}