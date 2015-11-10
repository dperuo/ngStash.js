/*
 * ngStash.js Jasmine Spec
 *
 * Released under the MIT License.
 *
 * Derek Peruo
 * http://github.com/dperuo
 *
 */

describe('ngStash', function () {
'use strict';

  var ngStash, sessionStash, localStash;

  beforeEach(function() {
    module('ngStash');

    inject(function(_$injector_) {
      sessionStash = _$injector_.get('sessionStash');
      localStash = _$injector_.get('localStash');
    })
  })

  describe('sessionStash', function() {
    it('is true', function () {
      expect(true).toBe(true);
    });
  })

  describe('localStash', function() {
    it('is true', function () {
      expect(true).toBe(true);
    });
  })


});
