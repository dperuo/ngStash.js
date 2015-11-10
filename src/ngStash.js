/**
 * ngStash.js
 * v1.0.0
 * An Angular factory for working with localStorage and sessionStorage
 *
 * Copyright 2015 Derek Peruo
 * http://github.com/dperuo
 * Released under the MIT License
 */

(function(undefined) {
  'use strict';

  angular
    .module('ngStash', [])
    .factory('SessionStash', SessionStashFn)
    .factory('LocalStash', LocalStashFn);

  SessionStashFn.$inject = ['$window'];
  LocalStashFn.$inject = ['$window'];

  function SessionStashFn($window) {
    return GenericStash('sessionStorage', $window);
  }

  function LocalStashFn($window) {
    return GenericStash('localStorage', $window);
  }

  function GenericStash(type, $window) {
    return {
      set: function(key, value) {
        $window[type].setItem(JSON.stringify(key), JSON.stringify(value));
      },

      get: function(key) {
        return JSON.parse($window[type].getItem(JSON.stringify(key)));
      },

      remove: function(key) {
        $window[type].removeItem(JSON.stringify(key));
      },

      clear: function () {
        $window[type].clear();
      }
    };
  }
})();
