// // Funtion
//difination of function
// //funtion is use to when you have use the code again  and again 
//  //     func name  func paramiters
// function student    (name,std){  //you can give multiples paramiters
//     // what this   funtion do is below
// console.log("student name is " + name +" "+ "in"+" " +"class "+std)


// }
// let std = 8;

// // how to return value in function

// function sum(a,b,c){
//     let d = a+b+c;
//    return d;

// }
//             // value1,v2,  v3
// let sumall = sum(1,"arif",0.2)
// console.log(sumall)

// // to print the function see below
// // func name   value1,value2
//     student    ("arif",std )


function num(a,b,c){
    let d = a+b;
    if (d>c) {
        console.log("a + b = "+ d +" a + b is  greater than c") 
    }
    else if (d==c) {
        console.log("a + b = "+ d +" a + b is equal to c") 
    }

    else if (d<c) {
        console.log("a + b = "+ d +" a + b is less than c") 
    }

    else{
        console.log("plese give value")
    }
}


num(1,2,5)

