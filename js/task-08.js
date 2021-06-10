// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

import users from "./users.js";

// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter((user) => user.friends.indexOf(friendName) !== -1)
//     .map(({ name }) => name);
const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.indexOf(friendName) !== -1)
    .reduce((acc, { name }) => [...acc, name], []);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
