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
    return {
      set: function(key, value) {
        $window.sessionStorage.setItem(JSON.stringify(key), JSON.stringify(value));
      },

      get: function(key) {
        return JSON.parse($window.sessionStorage.getItem(key));
      },

      remove: function(key) {
        $window.sessionStorage.removeItem(JSON.stringify(key));
      },

      clear: function () {
        $window.sessionStorage.clear();
      }
    };
  }

  function LocalStashFn($window) {
    return {
      set: function(key, value) {
        var stringKey = JSON.stringify(key);
        var stringVal = JSON.stringify(value);

        $window.localStorage.setItem(stringKey, stringVal);
      },

      get: function(key) {
        return JSON.parse($window.localStorage.getItem(key));
      },

      remove: function(key) {
        $window.localStorage.removeItem(JSON.stringify(key));
      },

      clear: function () {
        $window.localStorage.clear();
      }
    };
  }
})();
