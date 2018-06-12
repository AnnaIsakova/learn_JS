let arr = [ 3, 5, 7 ];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); // выведет "0", "1", "2", "foo"
}

for (let i of arr) {
    console.log(i); // выведет "3", "5", "7"
}

function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo());

function foo1(){
    var bar1 = function() {
        return 3;
    };
    return bar1();
    var bar1 = function() {
        return 8;
    };
}
alert(foo1());

alert(foo2());
function foo2(){
    var bar2 = function() {
        return 3;
    };
    return bar2();
    var bar2 = function() {
        return 8;
    };
}

// function foo4(){
//     return bar4();
//     var bar4 = function() {
//         return 3;
//     };
//     var bar4 = function() {
//         return 8;
//     };
// }
// alert(foo4());

function test() {
    alert(x);
    var x = 5;
}
test();