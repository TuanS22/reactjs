// Spread syntax
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6, 7];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);



// Rest parameters
// let result = 0;
// const sum = (...numbers) => {
//     result = numbers.reduce((total, item) => {
//         return total + item;
//     })
//     return result;
// }

// console.log(sum(2, 6, 8, 5, 6));

// if (result % 2 == 0) {
//     console.log("Đây là sỗ chẵn")
// }
// else {
//     console.log("Đây là số lẽ")
// }


// Destructuring
let obj1 = {
    fullName: "Le Anh Tuan",
    age: 22
};

let obj2 = {
    address: "Thanh Hoa",
    contry: "VietNam",
    friend: {
        name: "Nguyen Van A",
    }
};

let objAll = {
    ...obj1,
    ...obj2
};

const { fullName, age } = obj1;

console.log(fullName,  age)