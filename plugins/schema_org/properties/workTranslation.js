const { context } = require('../base')

module.exports = function (API) {
  class WorkTranslation extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [WorkTranslation] })
}