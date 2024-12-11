function greet(name, greettext="hi its default"){
    console.log(greettext + " " + name)
    console.log(name + "is good boy")
}

function sum(a,b,c){
    let d = a+b+c;
    return d;  //we can't write any thing after return 
}

let name = "arif"
let name2 = "atif"
let name3= "rohan"
let name4 = "shubham"
let greettext2 = "good morning"
let sumofabc = sum(4,6,1)
console.log(sumofabc)

greet(name, greettext2);
greet(name2, greettext2);
greet(name3, greettext2);
greet(name4);  //if you will not give the greettext2  then it will defaulty take greet value