const { BaseObject } = require('../../base')

const context = 'https://schema.org'

class SchemaOrgObject extends BaseObject {
  static context = context
}

module.exports = {
  context,
  SchemaOrgObject
}