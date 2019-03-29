// create
if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
      if (typeof proto !== 'object' && typeof proto !== 'function') {
          throw new TypeError('Object prototype may only be an Object: ' + proto);
      } else if (proto === null) {
          throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
      }

      if (typeof propertiesObject != 'undefined') {
          throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
      }

      function F() {}
      F.prototype = proto;

      return new F();
  };
}

"use strict";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Backbone =
/*#__PURE__*/
function () {
  function Backbone() {}

  var _proto = Backbone.prototype;

  _proto.forge = function forge() {
    alert('forged');
  };

  return Backbone;
}();

var define = function define(deps, cb) {
  cb(function () {
    return Backbone;
  });
};

define('backbone', function (require) {
  return Backbone;
});
define('scrollable', function (require) {
  var BB = require('Backbone');

  var Scrollable =
  /*#__PURE__*/
  function (_BB) {
    _inheritsLoose(Scrollable, _BB);

    function Scrollable() {
      return _BB.apply(this, arguments) || this;
    }

    var _proto2 = Scrollable.prototype;

    _proto2.events = function events() {
      var events = {};
      this.forge(); // should not throw

      return events;
    };

    return Scrollable;
  }(BB);

  ;
  var scrollable = new Scrollable();
  scrollable.events();
  return Scrollable;
});