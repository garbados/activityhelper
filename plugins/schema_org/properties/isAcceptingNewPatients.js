const { context } = require('../base')

module.exports = function (API) {
  class IsAcceptingNewPatients extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [IsAcceptingNewPatients] })
}