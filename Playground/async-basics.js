console.log('Stating App');

setTimeout(() =>{
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Second setTimeout');
},1000);


console.log('Finishing up');