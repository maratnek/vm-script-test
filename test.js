(testQuery, testResult) => {
    let a = 10;
    let b;
    new Promise((res, rej) => {
        testQuery((vr)=>{res(vr);})
    }).then((vr)=>{
        b = vr;
        testResult(a + b);        
    })

}
