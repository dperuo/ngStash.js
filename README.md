[![Build Status](https://travis-ci.org/dperuo/ngStash.js.svg)](https://travis-ci.org/dperuo/ngStash.js)

# ngStash.js

An Angular factory for working with `localStorage` and `sessionStorage`.

## Quick Start

Add ngStash as a module dependency.

```javascript
angular
  .module('myApp', ['ngStash']);
```

Add `LocalStash` or `SessionStash` as a controller dependency.

```javascript
angular
  .module('myApp', ['ngStash'])
  .controller('myCtrl', ['LocalStash', function (localStash) {
    // ...
  }]);
```


## Basic API

### Set Record

Keys and values are automatically converted to strings using `JSON.stringify()`.

```javascript
LocalStash.set(key, value)
```


### Get Record

Values are automatically converted back to their original type using `JSON.parse()`.

```javascript
LocalStash.get(key)
```


### Remove Record

```javascript
LocalStash.remove(key)
```


### Clear Storage

```javascript
LocalStash.clear()
```
