
//=========================================================
/*
const name = 'monir';
let age = 32;
const hobby = 'Reading';

age = 31;

const Expose = (myName, myAge, myHobby) => {
    return (
        `my name is : ${myName}, 
         my age is : ${myAge}, 
         my hobby is : ${myHobby}`
    );
}

console.log(Expose(name, age, hobby));
*/



//=======================================================
//Different Type of Arrow functions
/*
const testFunctionAddOne = (a, b)=>{
    return(a+b);
}
const testFunctionAddTwo = (a, b)=>a+b;
const testFunctionAddThree = () => 6+5;

console.log(testFunctionAddOne(5,8),testFunctionAddTwo(9,7), testFunctionAddThree());
*/

//=======================================================
//Java Script Object.....................................
/*
const person = {
    name : 'Shimul',
    age : '32',
    sayHi(){
        return('Hello I am ' + this.name + ',');
    }
}
console.log(person.sayHi()+'my age is '+ person.age);
*/

//========================================================

// Arrays..............
/*
const hobbies = ['playing', 'Reading', { name : 'monir', age : 32},32];
*/


/*for(let hby of hobbies){
    console.log(hby);
}*/
/*
let strHob = hobbies.filter(function(hob){
    if(typeof hob === "string")
        return hob;
});
console.log(strHob);
*/
/*
const allHobies = hobbies.map(hobby => 'Hobbies :' + hobby);
console.log(allHobies);
*/



//========================================================

// spread Operator--------------------------------
/*
const person = {
    name : 'Shamim',
    age : '32',
    welcome(){
        return('Hello :' + this.name);
    }
}
console.log(person.welcome());
const spreadPerson = {...person};
console.log(spreadPerson);

const personArray = ['monir', 'Shamim', 'Robin'];
const spreadPersonArray = [...personArray];
console.log(spreadPersonArray);
*/
//========================================================

// Rest Operator------------------------------------------
/*
const restArray = (...args)=>{
    return(args)
}
console.log(restArray(1,2,3,4,5,2));
*/
//========================================================

// Object Destructuring....

/*
const person = {
    name : 'Atik', 
    age : '35', 
    welcome : function(){
        return('hello i am'+ this.name);
    }
}
//console.log(person.welcome('monir'));
const printName = function({ welcome }){
    console.log(welcome);
}
printName(person);
*/
//========================================================

// Callback Functions..............
/*
const fetchData = callback => {
    setTimeout(()=>{
        callback('form callback')
    }, 2000)
}


setTimeout(()=>{
    console.log('This is the time');
    fetchData(test=> {
        console.log(test);
    })
}, 4000);

console.log('Hello');
*/
//========================================================
// Promise...........


// const fetchData = ()=>{
//     const promise = new Promise((reslv, rej)=>{
//         setTimeout(()=>{
//             reslv('Hello');
//         },2000)
//         rej('from rej');
//     });

//     return promise;

// };
// fetchData()
//     .then((str)=>{
//         console.log(str);
//     })
//     .catch((rej)=>{
//         console.log(rej);
//     });

//========================================================

// another promise..........
/*
function fetchData(){
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('This is resolve');
            
        }, 2000)
        reject('This is reject');
    })
    return promise;
}

fetchData()
    .then(function(givingData){
        console.log(givingData);
        return fetchData();
})
    .catch(function(givingDataOne){
        setTimeout(function(){
            console.log(givingDataOne);
        }, 2000)
        
});
*/

//========================================================
    



