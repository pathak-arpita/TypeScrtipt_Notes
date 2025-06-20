/*
&    functions are reusable blocks of code that perform a specific task.
&    we can writ functions in two ways ------------->
&             1). Normal Function
&             2). Arrow Function

^    Syntax of Function ------------------------->

       function func(param1: type, param2: type): returnType {
              function body
       }
     
       func(arg1, arg2);
       
^       OR

       const func = function (param1: type, param2: type): returnType {
              function body
       }
       func(arg1, arg2);
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// -------------------------------------------------------------------------------------------------- //
//~ Normal Function ------------------------->
// 1). 
function sum(a, b) {
    return a + b;
}
console.log("The SUM is -----------> " + sum(5, 7));
// 2).
function func_1(num) {
    if (num == 0) {
        return -1;
    }
    for (var i = 0; i < num; i++) {
        console.log(i + ",");
    }
    return 0;
}
console.log("ans of func_1", func_1(5));
//~ Arrow Function ------------------------->
var multiply = function (x, y) {
    return x * y;
};
console.log("The PRODUCT is -----------> " + multiply(5, 7));
// -------------------------------------------------------------------------------------------------- //
//! Que.) write a function which return boolean if passing parameter is divisible by 4 and 8.
function divisibleBy4and8(num) {
    return (num % 4 === 0 && num % 8 === 0);
}
console.log("NUMBER is divisible by 4 and 8  -----------> " + divisibleBy4and8(8));
//By using IIFE ----->
var func = (function divisibleBy4and8(x) {
    return x % 4 === 0 && x % 8 === 0;
})(10);
console.log("ans of func", func);
// ! Que.) Fetch the Data --------------------------->
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, quote;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://api.quotable.io/random")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    quote = _a.sent();
                    // console.log(quote);
                    return [2 /*return*/, quote];
            }
        });
    });
}
function processData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    data = _a.sent();
                    if (typeof data === 'object') {
                        console.log("data-------------->", data);
                    }
                    else {
                        throw new Error("Not an Object");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
processData();
//! Que.) Check Palindrome -------------------------->
function isPaliendrome(str) {
    var split = str.split("");
    var reverse = split.reverse();
    var joint = reverse.join("");
    return str === joint;
}
console.log("Given String is Paliendrome -----------------> ", isPaliendrome("123321"));
//! Que.) Average of Array ------------->
var array = [1, 2, 3, 4, 5];
var average = array.reduce(function (curr, acc) {
    return curr + acc;
});
console.log("Average of an Array is -------> ", average / array.length);
