[![Build Status](https://travis-ci.org/dperuo/ngStash.js.svg)](https://travis-ci.org/dperuo/ngStash.js)

# ngStash.js

An Angular factory for working with `localStorage` and `sessionStorage`.

## Quick Start

Add ngStash as a module dependency.

```
angular
  .module('myApp', ['ngStash']);
```

Add `LocalStash` or `SessionStash` as a controller dependency.

```
angular
  .module('myApp', ['ngStash'])
  .controller('myCtrl', ['LocalStash', function (localStash) {
    // ...
  }]);
```


## Basic API

### Set Record

Keys and values are automatically converted to strings using `JSON.stringify()`.

```
LocalStash.set(key, value)
```


### Get Record

Values are automatically converted back to their original type using `JSON.parse()`.

```
LocalStash.get(key)
```


### Remove Record

```
LocalStash.remove(key)
```


### Clear Storage

```
localStash.clear()
```
