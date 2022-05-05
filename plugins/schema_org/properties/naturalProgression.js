const { context } = require('../base')

module.exports = function (API) {
  class NaturalProgression extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [NaturalProgression] })
}