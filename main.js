// var

// var name = "Андрей";
// console.log(name);
// name = "Анастасия";
// console.log(name);

// if

// if (10 > 3) {
//   console.log("10 больше 3");
// } else {
//   console.log("Ошибка!");
// }

// for

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// function

// function sum(p1, p2, p3) {
//   let result = p1 + p2 + p3;
//   return result;
// }
// let test = sum(10, 20, 30);
// console.log(test);
// console.log(sum(15, 15, 20));
// console.log(sum(20, 20, 40));

// object and massive

// hw1

// let hello = ['Привет', 'loftschool'];
// hello.push('я изучаю', 'JavaScript'); 
// console.log(hello);
// console.log(hello.length);

// for (i = 0; i < hello.length; i++) {
//   console.log(hello[i]);
// }

// hw2

let numbers = [10, 15, 68, 34, 74, 55, 197, 147, 134, 183];

for (i = 0; i < numbers.length; i++) {
  // if (i > 100) {
  //   console.log(numbers[i]);
  // }
  console.log(numbers[i]);
}

// hw3

// let obj = {
//   name: 'Андрей',
//   lastName: 'Бекренёв',
//   age: 27
// };
// console.log(obj.name);
// console.log(obj.lastName);
// console.log(obj.age);
// obj.work = "developer"
// console.log(obj.work);

//hw 4

function hello(human) {
  let obj = {
    name: 'Андрей',
    lastName: 'Бекренёв',
    age: 27
  };
  return human = 'Привет меня зовут, ' + obj.name + ' ' + obj.lastName + 'и мне ' + obj.age + ' лет!';
};

let test = hello();
console.log(test);