// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

import users from "./users.js";

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.indexOf(friendName) !== -1) /// долго не мог понять почему не работает, firends это массив
    .map(({ name }) => name);
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
