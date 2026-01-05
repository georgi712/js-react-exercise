const users = [
    { id: 1, name: "Anna", active: true },
    { id: 2, name: "Boris", active: false },
    { id: 3, name: "Carmen", active: true },
    { id: 4, name: "Daniel", active: false }
];

// Task 1
const getActiveUsers = (users) => {
    return users.filter((user) => user.active)
}

// Task 2
const getUserNames = (users) => {
    return users.map((user) => user.name)
}

// Task 3
const toggleUser = (users, id) => {
    return users.map(user => 
        user.id === id 
            ? { ...user, active: !user.active }
            : user
    );
}

// Bonus
const areAllUsersActive = (users) => {
    return users.every((user) => user.active)
}

// in the first task i use filter because it returns a new array, I use map because I want to transform each user object into its name, producing a new array of strings without mutating the original array, in the third task i returning a new object for the toggled user so that i change the reference of that object, and in the bonus task i use every because it is the method that perfectly matches the description

const result = toggleUser(users, 2)

console.log(result === users);
console.log(result[0] === users[0]);
console.log(result[1] === users[1]);

console.log(getActiveUsers(users));
console.log(getUserNames(users));
const toggleOne = toggleUser(users, 2)
console.log(toggleOne);
const toggleTwo = toggleUser(toggleOne, 4);
console.log(toggleTwo);
console.log(areAllUsersActive(toggleTwo));
