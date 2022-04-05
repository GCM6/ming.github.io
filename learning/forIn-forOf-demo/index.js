const arr = [{a:1},{a:2},{a:3},{a:4}];
const obj = {a:1,b:2,c:3}
// for-of不能遍历对象，可以遍历数组
// ，
/**
 * 1，适合遍历数据结构有symbol.iterator属性
 * 2，可以使用break，continue和 return一起使用，也就是说随时退出循环
 * 3，像数组Array，Map，Set，String，arguments对象
 * 4，如果对象也想使用for-of 的话 可以使用object.keys()再使用
 */
for (const iterator of arr) {
    console.log("iterator", iterator);
}
// Object.hasOwnProperty.call(obj, key) 判断是不是原型上
// 更适合遍历对象
/**
 * 1，for in 可以遍历对象的属性跟原型上的方法，属性
 * 2，也可以遍历数组，但是下标上字符串类型，而且会遍历数组上原型的属性跟方法
 */
Object.prototype.sayIn = () => {
    console.log(123);
}
Array.prototype.sayArr = () => {
    console.log(1233);
}
for (const key in obj) {
    console.log("key", key);
    // 通过Object.hasOwnProperty.call进行过滤原型上的方法
    if (Object.hasOwnProperty.call(obj, key)) {
        console.log(1,key);
    }
}