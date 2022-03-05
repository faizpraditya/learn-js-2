// let word = "one"
// // NaN => Not a Number
// console.log(Number(word));

// (summary)
// let word = "1"
// let res = parseInt(word)
// console.log(typeof(res));
// console.log(parseInt(word));
// console.log(parseFloat(word));

// let number = 12
// console.log(String(number));
// console.log(number.toString());

// let l = false
// console.log(String(l));
// console.log(l.toString());

//================================

// (summary)
// function run(){
//     console.log("This run function is called");
// }

// run()

// (summary) menerima data type apapun
// bisa nama yang sama
// function run(a,b){
//     console.log("This run function is called");
//     console.log(a,b);
// }

// run("tes")

// (summary) Hanya bisa return 1 value
// kalau mau dapet 2 value, pakai array
// habis return keluar dari function
// function run(a,b){
//     return a+b
// }

// console.log(run(2,3));

// // Ditampung array
// function run2(a,b){
//     return [a,b]
// }
// let tes2 = run2(2,3)
// console.log(tes2);

// // Ditampung object
// function run3(a,b){
//     return {a,b}
// }
// let tes3 = run3(2,3)
// console.log(tes3);

// let temp = function run2(a,b){
//     let res = [a, b, "tes"]
//     return res
// }
// console.log(temp(2,3));

// arrow function
// tanpa define variable (let) sama aja, bisa.
// let arfunc = (tes) => {
//     console.log("arrow function example");
//     console.log(tes);
// }

// arfunc("jos")

// // (summary) parameter 1 bisa tidak menggunakan kurung ()
// let arfunc2 = tes => {
//     console.log("arrow function example");
//     console.log(tes);
// }

// arfunc2("jos jos jos")

// // https://www.tutorialsteacher.com/javascript/javascript-variable#:~:text=The%20variables%20declared%20without%20the,overwrite%20an%20existing%20global%20variable. 
// // any, global variable
// arfunc3 = tes => {
//     console.log("arrow function example");
//     console.log(tes);
// }

// arfunc3("jos jos josz")

// let funcArr = param => console.log(param);
// funcArr(10)

// function funcGen() {
//     word = "test"
//     console.log(this.word);
// }
// funcGen()

// // ga punya this di dalam sini
// const funcArr = () => {
//     word = "test"
//     console.log(this.word);
// }
// funcArr()

// // Object
// let trainee = {
//     firstName : "Faiz",
//     firstName : "Mason",
//     lastName : "Praditya",
//     tesFunction : function() {
//         return this.firstName + " " + this.lastName
//     },
//     address : {
//         province : "Jakarta", city : "Jakarta Selatan"
//     }
// }
// console.log(trainee.firstName);
// console.log(trainee.tesFunction());
// console.log(trainee.address.city);

// (summary) 
// passing by value => melakukan copy valuenya saja : number, string, boolean
// passing by reference => melakukan copy value beserta alamat memorynya : object, array

// // pass by value
// // untuk primitive data type semuanya passing by value
// let number = 1
// let numb = number
// console.log(numb);
// numb = 10
// console.log(number);
// console.log(numb);

// let word = "mason"
// let words = word
// console.log(words);
// words = "mount"
// console.log(word);
// console.log(words);

// let bool1 = false
// let bools = bool1
// console.log(bools);
// bools = true
// console.log(bool1);
// console.log(bools);


// pass by reference

// let arr1 = ["a"]
// let arr2 = arr1
// console.log(arr1);
// console.log(arr2);
// arr2[0] = 1
// (summary) (referencenya putus)
// arr2 = 2
// console.log(arr1);
// console.log(arr2);

let trainee = {
    firstName : "Faiz",
    firstName : "Mason",
    lastName : "Praditya",
    // tesFunction : function() {
    //     return this.firstName + " " + this.lastName
    // },
    address : {
        province : "Jakarta", city : "Jakarta Selatan"
    }
}

// let employee = trainee
// console.log(trainee);
// console.log(employee);
// employee.lastName = "Mount"
// console.log(trainee);
// console.log(employee);

// (summary) cara agar object dan array tidak pass by reference tiap elementnya
// spread operator
// let employee = {...trainee};
// (summary) kalau mau copy object dalam object, object yang didalamnya dicopy juga.
let employee = {...trainee, address:{...trainee.address}};
// (summary)
// object assign
// let employee = Object.assign({},trainee)
employee.lastName = "Mount"
employee.address.province = "Jawa Tengah"
console.log(trainee);
console.log(employee);