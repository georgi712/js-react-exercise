const users = [
  {
    id: 1,
    name: "Anna",
    address: {
      city: "Sofia",
      zip: "1000"
    },
    orders: [
      { id: 1, total: 50 },
      { id: 2, total: 30 }
    ]
  },
  {
    id: 2,
    name: "Boris",
    address: {
      city: "Plovdiv",
      zip: "4000"
    },
    orders: [
      { id: 3, total: 20 }
    ]
  }
];

// Task 1

const updateUserCity = (users, userId, newCity) => {
    return users.map((user) => {
        const newObj = user.id === userId
            ? {...user, address: {...user.address, city: newCity}}
            : user
        return newObj
    })
}

const updatedUsers = updateUserCity(users, 1, "Burgas");
console.log(updatedUsers);

// Task 2

const addOrder = (users, userId, newOrder) => {
    return users.map((user) => {
        const newObj = user.id === userId
            ? {...user, orders: [...user.orders, newOrder]}
            : user
        return newObj
    })
}

const addedOrder = addOrder(users, 1, {id:4, total:70});
console.log(addedOrder);

// Task 3

const updateOrderTotal = (users, userId, orderId, newTotal) => {
    return users.map((user) => {
        const newObj = user.id === userId
            ? {...user, orders: user.orders.map((order) => {
                return order.id === orderId 
                    ? {...order, total: newTotal}
                    : order
            })}
            : user
        return newObj
    })
}

const updatedTotal = updateOrderTotal(users, 1, 1, 70);
console.log(updatedTotal[0]);

// Bonus

// 1. Why is deep cloning the entire state a bad idea?

/* Deep cloning recreates references for all objects, even unchanged ones. This causes unnecessary re-renders, breaks memoization, and destroys React’s ability to efficiently detect what actually changed. */

// 2. What does “update only the changed path” mean?

/* Updating only the changed path means creating new references only for the objects that contain the actual change, from the deepest level up to the root, while preserving all other references. */

// 3. Which references should change in Task 3, exactly?

/* We should change the refernce to the user object in which we are changing the total of the order, in the orders array in which we are changing the total of the order and the order object of which we are changing the total */ 


