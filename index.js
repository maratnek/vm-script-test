const vm = require('./vm_script');
vm('test.js', (result) => {
    console.log(result);
})