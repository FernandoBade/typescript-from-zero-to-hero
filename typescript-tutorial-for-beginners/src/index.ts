// console.log("Hello World!");


// var age: number = 20;
// age = 36;


// let age: number;
// age = 20;
// if (age < 50) {
//     age += 10;
// }
// age += 10;
// console.log(age);


// let sales = 123_456_789;
// let course = "TypeScript";
// let is_published = true;
// let level;


// function render(document: any){
//     console.log(document);    
// }


// let numbers: number[] = [1, 2, 3];
// numbers.forEach(number => number.toFixed)


// let user: [number, string] = [1, 'John Doe'];
// user.push(1);
// console.log(user);


// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);


// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// calculateTax(10_000, 2023);


// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void;
// }

// let employee: Employee = {
//     id: 1,
//     name: "John Doe",
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }


// function kgToLbs(weight: number | string): number {
//     if(typeof weight === "number")
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10kg');


// type Draggable = {
//     drag: () => void
// }
// type Resizable = {
//     resize: () => void
// }
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//     drag: () => { },
//     resize: () => { }
// }


// type Quantity = 50 | 100;
// let quantity: Quantity = 100; 
// type Metric = 'cm' | 'inch';


// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toLocaleUpperCase());
//     else
//         console.log("Hola!");
// }
// greet(null);


type Customer = {
    birthday?: Date
};
function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear());
