module.exports = function (API) {
  class Actor extends API.models.Object {}
  class Application extends Actor { /* TODO */ }
  class Group extends Actor { /* TODO */ }
  class Organization extends Actor { /* TODO */ }
  class Person extends Actor { /* TODO */ }
  class Service extends Actor { /* TODO */ }

  for (const Model of [
    Actor,
    Application,
    Group,
    Organization,
    Person,
    Service
  ]) {
    API.addModel(Model)
  }
}
