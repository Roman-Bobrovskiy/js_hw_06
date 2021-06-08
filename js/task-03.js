// Задание 3
// Получить массив имен пользователей по полу (поле gender).
import users from "./users.js";

// function getUsersWithGender(users, gender) {
//   return users.filter((user) => {
//     return user.gender == gender;
//   });
// }

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender == gender);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
