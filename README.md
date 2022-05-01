# ActivityHelper

[![CI](https://github.com/garbados/activityhelper/actions/workflows/ci.yaml/badge.svg)](https://github.com/garbados/activityhelper/actions/workflows/ci.yaml)
[![Coverage Status](https://img.shields.io/coveralls/github/garbados/activityhelper/master.svg?style=flat-square)](https://coveralls.io/github/garbados/activityhelper?branch=master)
[![Stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![NPM Version](https://img.shields.io/npm/v/activityhelper.svg?style=flat-square)](https://www.npmjs.com/package/activityhelper)
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

A library that exports an API for producing and validating [ActivityPub](https://www.w3.org/TR/activitypub/) objects.

In a federated system bound together by protocols, it's useful to have programmatic access over the content of those protocols. It's one thing to see that a Person type inherits all properties from an Object type, but what properties are those? You can find out with ActivityHelper like this:

```js
const ActivityHelper = require('.')

console.log(ActivityHelper.models.Person.properties)
// [
//   [class Attachment extends BaseProperty],
//   [class AttributedTo extends BaseProperty],
//   [class Audience extends BaseProperty],
//   [class Content extends BaseProperty],
//   [class Context extends BaseProperty],
//   [class ContentMap extends BaseProperty],
//   [class Name extends BaseProperty],
//   [class NameMap extends BaseProperty],
//   [class EndTime extends BaseProperty],
//   [class Generator extends BaseProperty],
//   [class Icon extends BaseProperty],
//   [class Id extends BaseProperty],
//   [class Image extends BaseProperty],
//   [class InReplyTo extends BaseProperty],
//   [class Location extends BaseProperty],
//   [class Preview extends BaseProperty],
//   [class Published extends BaseProperty],
//   [class Replies extends BaseProperty],
//   [class StartTime extends BaseProperty],
//   [class Summary extends BaseProperty],
//   [class SummaryMap extends BaseProperty],
//   [class Tag extends BaseProperty],
//   [class Updated extends BaseProperty],
//   [class Url extends BaseProperty],
//   [class To extends BaseProperty],
//   [class Bto extends BaseProperty],
//   [class Cc extends BaseProperty],
//   [class Bcc extends BaseProperty],
//   [class MediaType extends BaseProperty],
//   [class Duration extends BaseProperty],
//   [class Inbox extends BaseProperty],
//   [class Outbox extends BaseProperty],
//   [class Following extends BaseProperty],
//   [class Followers extends BaseProperty],
//   [class Liked extends BaseProperty],
//   [class Streams extends BaseProperty],
//   [class PreferredUsername extends BaseProperty],
//   [class Endpoints extends BaseProperty]
// ]
```

Models and properties in ActivityHelper have validators you can use to validate objects encountered during ActivityPub federation. You can even convert those objects into ActivityPub class instances with `API.fromObject()`:

```js
const model = ActivityHelper.fromObject({
  "@context": "https://www.w3.org/ns/activitystreams",
  type: "Object",
  id: "http://www.test.example/object/1",
  name: "A Simple, non-specific object"
})
console.log(model)
> ObjectModel {
>   type: 'Object',
>   id: 'http://www.test.example/object/1',
>   name: 'A Simple, non-specific object'
> }
```

You can also extend ActivityHelper by writing plugins:

```js
// your_plugin.js
module.exports = function (ActivityHelper) {
  class MyNote extends ActivityHelper.models.Note {
    // your cool features
  }

  ActivityHelper.addContext('https://my.cool.ap.extension/v1', {
    models: [MyNote]
  })
}

// later, elsewhere:
const ActivityHelper = require('activityhelper')
ActivityHelper.plugin(require('./your_plugin'))

console.log(ActivityHelper.models.MyNote)
// [class MyNote extends Note]
```

## Install

TODO

## Usage

TODO

This project is very early in development and its API is likely to evolve rapidly. To understand all of what's going on, I suggest you read the source.

## Development

To hack on ActivityHelper, check out the [issues page](https://github.com/garbados/activityhelper/issues). To submit a patch, [submit a pull request](https://github.com/garbados/activityhelper/pulls).

To run the test suite, use `npm test` in the source directory:

```bash
$ git clone garbados/activityhelper
$ cd activityhelper
$ npm i
$ npm test
```

A formal code of conduct is forthcoming. Pending it, contributions will be moderated at the maintainers' discretion.

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.html)
