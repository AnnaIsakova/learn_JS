var second = "Second";
console.log("second.js - var first before: " + first);
first = "First from second";
console.log("second.js - var first after: " + first);
console.log("second.js - var second: " + second);
console.log("second.js - global before: " + global);
global = "GLOBAL from second";
console.log("second.js - global after: " + global);
