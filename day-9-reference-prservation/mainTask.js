const state = {
  users: [
    {
      id: 1,
      name: "Anna",
      online: false,
      messages: [
        { id: 1, text: "Hi", read: true },
        { id: 2, text: "How are you?", read: false }
      ]
    },
    {
      id: 2,
      name: "Boris",
      online: true,
      messages: [
        { id: 3, text: "Hello", read: false }
      ]
    }
  ]
};

// Task 1

const toggleUserOnline = (state, userId) => {
    return {...state, users:state.users.map(user =>  user.id === userId ? {...user, online: !user.online} : user)}
}

console.log(toggleUserOnline(state, 1));

// Task 2

const markMessageRead = (state, userId, messageId) => {
    return {...state, users: state.users.map((user) => {
        return user.id === userId 
            ? {...user, messages: user.messages.map((message) => {
                if (message.read === true) return message;
                return message.id === messageId
                    ? {...message, read: true}
                    : message
                })
            }
            : user
    })}
}

const readMessage = markMessageRead(state, 1, 2);
console.log(readMessage.users[0]);

// Task 3

const removeReadMessages = (state) => {
    return {...state, users: state.users.map(user => {
        if (user.messages.every(message => message.read === false)) return user
        return {...user, messages: user.messages.filter(message => message.read === false)}
    })}
}

const removedMessages = removeReadMessages(state)
console.log(removedMessages.users[0], removedMessages.users[1]);

// Bonus

// 1. Why is returning the same user object in Task 3 critical for React performance?

/*
Returning the same user object preserves reference equality.
React uses shallow comparison (===) to detect changes.
If a user has no read messages, returning the same object tells React nothing changed,
allowing it to skip unnecessary re-renders and improving performance.
*/

// 2. What is the difference between: users.map(...) and users.reduce(...) when it comes to reference preservation?

/*
map always creates a new array with one output per input element, which often leads to recreating objects unnecessarily.
reduce allows fine-grained control over whether to reuse or recreate each element, making it better for preserving references.
In React, this matters because reference equality determines whether components re-render.
*/

// 3. When is mutation acceptable in JavaScript but NOT acceptable in React state updates?

/*
Mutation is acceptable in plain JavaScript when no system relies on reference changes.
It is NOT acceptable in React state updates because React detects changes using reference equality.
Mutating existing state keeps the same reference, which can cause React to skip re-renders
and display stale or inconsistent UI.
*/