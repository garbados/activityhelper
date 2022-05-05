const { context } = require('../base')

module.exports = function (API) {
  class HasBioPolymerSequence extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [HasBioPolymerSequence] })
}