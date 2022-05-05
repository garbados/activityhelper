module.exports = function (API) {
  API.plugin(require('./properties'))
  API.plugin(require('./models'))
}