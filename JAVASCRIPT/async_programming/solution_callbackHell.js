function firstFunction(){
    return new Promise((resolve)=>
        setTimeout(() => {
            console.log('First function')
        }, 1000);
    });
}