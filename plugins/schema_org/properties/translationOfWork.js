const { context } = require('../base')

module.exports = function (API) {
  class TranslationOfWork extends API.BaseProperty { /* TODO */ }

  API.addContext(context, { properties: [TranslationOfWork] })
}