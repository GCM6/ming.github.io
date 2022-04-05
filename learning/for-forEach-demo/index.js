
    // for 循环可以continue跳出循环
for (let index = 0; index < 10; index++) {
    if(index % 2 === 0) {
        continue
    }else {
        console.log('index----->',index);
    }
    
}
// for循环 可以进行break而且可以return
const testFor = () =>{
    for (let i = 0; i < 10; i++) {
        // if(i === 8) break;
        if(i === 6) {
            return i
        }
        console.log('i--->',i);
    }
}
console.log("return", testFor());
// forEach 没有 continue， break而且return 无效
const arr = [1,2,3,4,5]
arr.forEach(element => {
    return element
});
console.log("arr", arr);

/**
 * 区别：for foreach
 * 1，for循环可以通过break ,return 结束循环，可以通过continue跳出循环，而且可以控制循环起点，而forEach都不能
 * 2，foreach 对于空数组是不会执行回调函数
 */
