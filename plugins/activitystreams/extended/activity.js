module.exports = function (API) {
  const { Activity } = API.models

  class Accept extends Activity { /* TODO */ }
  class Add extends Activity { /* TODO */ }
  class Announce extends Activity { /* TODO */ }
  class Arrive extends Activity { /* TODO */ }
  class Block extends Activity { /* TODO */ }
  class Create extends Activity { /* TODO */ }
  class Delete extends Activity { /* TODO */ }
  class Dislike extends Activity { /* TODO */ }
  class Flag extends Activity { /* TODO */ }
  class Follow extends Activity { /* TODO */ }
  class Ignore extends Activity { /* TODO */ }
  class Invite extends Activity { /* TODO */ }
  class Join extends Activity { /* TODO */ }
  class Leave extends Activity { /* TODO */ }
  class Like extends Activity { /* TODO */ }
  class Listen extends Activity { /* TODO */ }
  class Move extends Activity { /* TODO */ }
  class Offer extends Activity { /* TODO */ }
  class Question extends Activity { /* TODO */ }
  class Reject extends Activity { /* TODO */ }
  class Read extends Activity { /* TODO */ }
  class Remove extends Activity { /* TODO */ }
  class TentativeReject extends Activity { /* TODO */ }
  class TentativeAccept extends Activity { /* TODO */ }
  class Travel extends Activity { /* TODO */ }
  class Undo extends Activity { /* TODO */ }
  class Update extends Activity { /* TODO */ }
  class View extends Activity { /* TODO */ }

  for (const Model of [
    Accept,
    Add,
    Announce,
    Arrive,
    Block,
    Create,
    Delete,
    Dislike,
    Flag,
    Follow,
    Ignore,
    Invite,
    Join,
    Leave,
    Like,
    Listen,
    Move,
    Offer,
    Question,
    Reject,
    Read,
    Remove,
    TentativeReject,
    TentativeAccept,
    Travel,
    Undo,
    Update,
    View
  ]) {
    API.addModel(Model)
  }
}
