const orders = [
    { id: 1, customer: "Anna", product: "Apple", quantity: 2 },
    { id: 2, customer: "Boris", product: "Banana", quantity: 5 },
    { id: 3, customer: "Anna", product: "Orange", quantity: 1 },
    { id: 4, customer: "Carmen", product: "Apple", quantity: 4 },
    { id: 5, customer: "Boris", product: "Apple", quantity: 1 }
];

// Task 1

const countOrdersByCustomer = (orders) => {
    return orders.reduce((countObj, order) => {
        const curCustomer = order.customer;
        countObj[curCustomer] = (countObj[curCustomer] || 0) + 1;
        return countObj;
    }, {})
};

console.log(countOrdersByCustomer(orders));

// Task 2 

const totalQuantityByProduct = (orders) => {
    return orders.reduce((countObj, order) => {
        const curProduct = order.product;
        countObj[curProduct] = (countObj[curProduct] || 0) + order.quantity;
        return countObj;
    }, {})
};

console.log(totalQuantityByProduct(orders));

// Bonus

const findTopCustomer = (orders) => {
    const customers = orders.reduce((countObj, order) => {
        const curCustomer = order.customer;
        countObj[curCustomer] = (countObj[curCustomer] || 0) + order.quantity;
        return countObj;
    }, {})

    let biggest = 0
    let topCustomer = '';

    for (const name in customers) {
        const quantity = customers[name];
        if (quantity > biggest) {
            biggest = quantity
            topCustomer = name;
        }
    }

    return topCustomer;
}

console.log(findTopCustomer(orders));

// I mutate the accumulator object directly. This is safe because the accumulator is created by reduce and is not referenced anywhere else. Mutating it does not affect the original array or any external state.
// for the bonus firstly i am using the same strategy as the first to strategies to aggregate the quantities and then i am using for in cycle and two variebles which i assign the highest quantity and the top customer and check and change the in the cycle
// Map can't solve this problem because it returns an array not an object and we don't have the same control over the otput
// It is safe two mutate the accumilator object because it is new and nothing references it