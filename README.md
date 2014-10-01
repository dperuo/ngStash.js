ngStash.js
==========

An Angular factory for working with localStorage and sessionStorage.

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
  .contrller('myCtrl', ['localStash', function (localStash) {
    // ...
  }]);
```



Basic API
---------

### Set Record
```
localStash.set(key, value)
```

### Get Record
```
localStash.get(key)
```

### Remove Record
```
localStash.remove(key)
```

### Clear Storage
```
localStash.clear()
```
