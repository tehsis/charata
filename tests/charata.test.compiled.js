'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _lib = require('../lib');

var _lib2 = _interopRequireDefault(_lib);

describe('charata', function () {
  beforeEach(function () {
    document.body.innerHTML = '';
  });

  it('should render elements with text', function () {
    (0, _lib2['default'])('div', 'hello world', null, ['class', 'test']).renderTo(document.body);

    var myEl = document.getElementsByClassName('test')[0];

    _assert2['default'].ok(myEl.textContent === 'hello world');
  });

  it('should render elements with children', function () {
    (0, _lib2['default'])('ul', (0, _lib2['default'])('li')).renderTo(document.body);

    var myUL = document.getElementsByTagName('ul');
    var myLI = document.getElementsByTagName('li');

    _assert2['default'].ok(myUL.length === 1);
    _assert2['default'].ok(myLI.length === 1);
  });

  it('should render elements with collections as children', function () {
    (0, _lib2['default'])('ul', [(0, _lib2['default'])('li', 'one'), (0, _lib2['default'])('li', 'two'), (0, _lib2['default'])('li', 'three')]).renderTo(document.body);

    var myUl = document.getElementsByTagName('ul');
    var myLIs = document.getElementsByTagName('li');

    _assert2['default'].ok(myUl.length === 1);
    _assert2['default'].ok(myLIs.length === 3);
  });
});
