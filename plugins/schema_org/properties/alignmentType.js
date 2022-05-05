const { context } = require('../base')

module.exports = function (API) {
  class AlignmentType extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [AlignmentType] })
}