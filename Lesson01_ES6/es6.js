/**
 * Created by jialuzhang on 2018/12/7.
 */
let name = 'zjl';
// console.log(name);
let results = [1,2,3].map((x)=>{
    return x + 2;
})
console.log(results);
document.body.innerHTML = 'Hello World';

{
    let fruit = 'apple';
    console.log(fruit)
    var food = 'rice bow';
}

console.log(food);

/**
 * 解构数组
 * @returns {[string,string,string]}
 */
function breakFast() {
    return ['cake','coffee','apple'];
}
var [dessert,fruit] = breakFast();
console.log(dessert,fruit);  //cake coffee

/**
 * 模板字符串
 */
let myBreakfast = `今天的早餐是：${dessert} 与 ${fruit}`;
console.log(myBreakfast);

/**
 * 判断字符串是否包含其他字符串
 */
{
    let  dessert = 'cake';
    let drink = 'coffee';
    let myBreakfast = `今天的早餐是：${dessert} 与 ${drink}!`;
    console.log(myBreakfast.startsWith('今天'));
    console.log(myBreakfast.endsWith('!'));
    console.log(myBreakfast.includes('cake'));
}

/**
 * 默认参数
 */
{
    function breakFast(dessert='cake',drink='coffee') {
        return `今天的早餐是：${dessert} 与 ${drink}`;
    }
    console.log(breakFast())
}

/**
 *展开操作符
 */
{
    let fruits = ['apple','banana'];
    let foods = [...fruits,'rice'];
    console.log(foods);
}

/**
 *剩余操作符
 */
{
    function breakFast(dessert='cake',drink='coffee',...otherfoods) {
        console.log(dessert,drink,otherfoods);
    }
    breakFast('rice','tea','milk','orange');
}

/**
 *
 */
{

}

/**
 *箭头函数
 */
{

}

/**
 *对象表达式
 */
{
    let dessert = 'cake';
    let drink = 'coffee';
    let breakFast = {
        dessert,
        drink
    }
    console.log(breakFast);
}

/**
 *对象属性名
 */

{
    let foods = {};
    foods['hot drink'] = 'tea';
    console.log(foods);
}

/**
 *类
 */
{
    class Chef{
        constructor(food){
            this.food = food;
            this.dish = [];
        }
        get menu(){
            return this.dish;
        }
        set menu(dish){
            this.dish.push(dish);
        }
        cook(){
            console.log(this.food);
        }
    }
    let me = new Chef(['tomato','eggs']);
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
    let foods = new Set(['apple', 'orange', 'banana']);
    foods.add('coffee');
    foods.add('banana');
    console.log(foods)
    console.log(foods.size)
    console.log(foods.has('apple'));
    foods.delete('apple');
    console.log(foods)
    foods.forEach(foods => {
        console.log(foods)
    })
    foods.clear()
    console.log(foods);
    // 去除数组的重复成员
    let array = [1,1,2,2,3,4,5];
    console.log([...new Set(array)])

    // 提问
    const set = new Set([1, 2, 3, 4, 4]);
    console.log(set)
    console.log([set])
    console.log([...set])

}

/**
 * Map Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
 */

{
    let food = new Map();
    let fruit = {}, cook = function () {}, dessert = '甜点';
    food.set(fruit, 'apple');
    food.set(cook, 'knife');
    food.set(dessert, 'cake');
    console.log(food);
    console.log(food.size);
    console.log(food.get(fruit));
    console.log(food.get(cook));
    food.delete(dessert);
    console.log(food.has(dessert))
    food.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    });

    food.clear();
    console.log(food);
    // 练习
    // Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。

    const map = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);
    console.log(map);
    console.log([...map.keys()])
    // [1, 2, 3]

    console.log([...map.values()])
    // ['one', 'two', 'three']

    console.log([...map.entries()])
// [[1,'one'], [2, 'two'], [3, 'three']]

    console.log([...map])
// [[1,'one'], [2, 'two'], [3, 'three']]

}
