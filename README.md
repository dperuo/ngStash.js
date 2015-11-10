[![Build Status](https://travis-ci.org/dperuo/ngStash.js.svg)](https://travis-ci.org/dperuo/ngStash.js)

ngStash.js
==========

An Angular factory for working with `localStorage` and `sessionStorage`.

Quick Start
-----------
Add ngStash as a module dependency.
```
angular
  .module('myApp', ['ngStash']);
```

Add `localStash` or `sessionStash` as a controller dependency.
```
angular
  .module('myApp', ['ngStash'])
  .controller('myCtrl', ['localStash', function (localStash) {
    // ...
  }]);
```



Basic API
---------

### Set Record
```
localStash.set(key, value)
```
Keys and values are automatically converted to strings using `JSON.stringify()`.


### Get Record
```
localStash.get(key)
```
Valuse are automatically converted back to their original type using `JSON.parse()`.


### Remove Record
```
localStash.remove(key)
```


### Clear Storage
```
localStash.clear()
```
