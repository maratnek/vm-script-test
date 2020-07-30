'use strict';
const vm = require('vm');
const fs = require('fs');
let callback = ()=>{};
function testResult(result) { 
    callback(result); // В данном случае callback это функция переданная при инициализации
}
function testQuery(callback) { 
    setTimeout(function() { callback(100500); }, 2000); 
}

module.exports = (code, cb) => {
    console.log(code);
    callback = cb;

    fs.readFile("test.js", 'utf-8', (err, data)=>{
        if (err) return;
        vm.runInThisContext(data)(testQuery, testResult);
    });
};