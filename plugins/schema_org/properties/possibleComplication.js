const { context } = require('../base')

module.exports = function (API) {
  class PossibleComplication extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [PossibleComplication] })
}