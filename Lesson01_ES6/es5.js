'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jialuzhang on 2018/12/7.
 */
var name = 'zjl';
// console.log(name);
var results = [1, 2, 3].map(function (x) {
    return x + 2;
});
console.log(results);
document.body.innerHTML = 'Hello World';

{
    var _fruit = 'apple';
    console.log(_fruit);
    var food = 'rice bow';
}

console.log(food);

/**
 * 解构数组
 * @returns {[string,string,string]}
 */
function breakFast() {
    return ['cake', 'coffee', 'apple'];
}

var _breakFast = breakFast(),
    _breakFast2 = _slicedToArray(_breakFast, 2),
    dessert = _breakFast2[0],
    fruit = _breakFast2[1];

console.log(dessert, fruit); //cake coffee

/**
 * 模板字符串
 */
var myBreakfast = '\u4ECA\u5929\u7684\u65E9\u9910\u662F\uFF1A' + dessert + ' \u4E0E ' + fruit;
console.log(myBreakfast);

/**
 * 判断字符串是否包含其他字符串
 */
{
    var _dessert = 'cake';
    var drink = 'coffee';
    var _myBreakfast = '\u4ECA\u5929\u7684\u65E9\u9910\u662F\uFF1A' + _dessert + ' \u4E0E ' + drink + '!';
    console.log(_myBreakfast.startsWith('今天'));
    console.log(_myBreakfast.endsWith('!'));
    console.log(_myBreakfast.includes('cake'));
}

/**
 * 默认参数
 */
{
    var _breakFast3 = function _breakFast3() {
        var dessert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cake';
        var drink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'coffee';

        return '\u4ECA\u5929\u7684\u65E9\u9910\u662F\uFF1A' + dessert + ' \u4E0E ' + drink;
    };

    console.log(_breakFast3());
}

/**
 *展开操作符
 */
{
    var fruits = ['apple', 'banana'];
    var foods = [].concat(fruits, ['rice']);
    console.log(foods);
}

/**
 *剩余操作符
 */
{
    var _breakFast4 = function _breakFast4() {
        var dessert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cake';
        var drink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'coffee';

        for (var _len = arguments.length, otherfoods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            otherfoods[_key - 2] = arguments[_key];
        }

        console.log(dessert, drink, otherfoods);
    };

    _breakFast4('rice', 'tea', 'milk', 'orange');
}

/**
 *
 */
{}

/**
 *箭头函数
 */
{}

/**
 *对象表达式
 */
{
    var _dessert2 = 'cake';
    var _drink = 'coffee';
    var _breakFast5 = {
        dessert: _dessert2,
        drink: _drink
    };
    console.log(_breakFast5);
}

/**
 *对象属性名
 */

{
    var _foods = {};
    _foods['hot drink'] = 'tea';
    console.log(_foods);
}

/**
 *类
 */
{
    var Chef = function () {
        function Chef(food) {
            _classCallCheck(this, Chef);

            this.food = food;
            this.dish = [];
        }

        _createClass(Chef, [{
            key: 'cook',
            value: function cook() {
                console.log(this.food);
            }
        }, {
            key: 'menu',
            get: function get() {
                return this.dish;
            },
            set: function set(dish) {
                this.dish.push(dish);
            }
        }]);

        return Chef;
    }();

    var me = new Chef(['tomato', 'eggs']);
    me.cook();
    console.log(me.menu);
    me.menu = 'fish';
    me.menu = 'potato';
    console.log(me.menu);
}

/**
 *类的静态方法，不需要实例化就可以使用
 */

/**
 *extends
 */

/**
 *设置对象的prototype
 */

/**
 * 集合 Set ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。)
 */
{
    var _foods2 = new Set(['apple', 'orange', 'banana']);
    _foods2.add('coffee');
    _foods2.add('banana');
    console.log(_foods2);
    console.log(_foods2.size);
    console.log(_foods2.has('apple'));
    _foods2.delete('apple');
    console.log(_foods2);
    _foods2.forEach(function (foods) {
        console.log(foods);
    });
    _foods2.clear();
    console.log(_foods2);
    // 去除数组的重复成员
    var array = [1, 1, 2, 2, 3, 4, 5];
    console.log([].concat(_toConsumableArray(new Set(array))));

    // 提问
    var set = new Set([1, 2, 3, 4, 4]);
    console.log(set);
    console.log([set]);
    console.log([].concat(_toConsumableArray(set)));
}

/**
 * Map Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
 */

{
    var _food = new Map();
    var _fruit2 = {},
        cook = function cook() {},
        _dessert3 = '甜点';
    _food.set(_fruit2, 'apple');
    _food.set(cook, 'knife');
    _food.set(_dessert3, 'cake');
    console.log(_food);
    console.log(_food.size);
    console.log(_food.get(_fruit2));
    console.log(_food.get(cook));
    _food.delete(_dessert3);
    console.log(_food.has(_dessert3));
    _food.forEach(function (value, key) {
        console.log(key + ' = ' + value);
    });

    _food.clear();
    console.log(_food);
    // 练习
    // Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。

    var map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
    console.log(map);
    console.log([].concat(_toConsumableArray(map.keys())));
    // [1, 2, 3]

    console.log([].concat(_toConsumableArray(map.values())));
    // ['one', 'two', 'three']

    console.log([].concat(_toConsumableArray(map.entries())));
    // [[1,'one'], [2, 'two'], [3, 'three']]

    console.log([].concat(_toConsumableArray(map)));
    // [[1,'one'], [2, 'two'], [3, 'three']]
}
