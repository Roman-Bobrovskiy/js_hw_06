// Задание 1
// Получить массив имен всех пользователей (поле name).
import users from "./users.js";
// console.table(users);
// const getUserNames = users.map((user) => {
//   return user.name;
// });
// console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUserNames = users.map(({ name }) => name);
console.log(getUserNames);
