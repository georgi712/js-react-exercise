const todos = [
  { id: 1, text: "Learn JS", completed: false },
  { id: 2, text: "Learn React", completed: false },
  { id: 3, text: "Build project", completed: true }
];

//  Task 1

const toggleTodo = (todos, id) => {
    return todos.reduce((newArr, task) => {
        task.id === id 
            ? newArr.push({...task, completed: !task.completed})
            : newArr.push(task)
        return newArr
    }, [])
}

const toggled = toggleTodo(todos, 2);
console.log(toggled);
console.log(todos === toggled);
console.log(todos[0] === toggled[0]);
console.log(todos[1] === toggled[1]);


// Task 2

const updateTodoText = (todos, id, newText) => {
    return todos.reduce((newArr, task) => {
        task.id === id 
            ? newArr.push({...task, text: newText})
            : newArr.push(task)
        return newArr
    }, [])
}

const rewritten = updateTodoText(todos, 2, "sasdasdas");
console.log(rewritten);
console.log(todos === rewritten);
console.log(todos[0] === rewritten[0]);
console.log(todos[1] === rewritten[1]);

// Task 3

const removeCompletedTodos = (todos) => {
    return todos.filter(task => !task.completed)
}

console.log(removeCompletedTodos(todos));

// Bonus

// 1. Why is setTodos([...todos]) sometimes NOT enough?

/*
setTodos([...todos]) only creates a new array reference, but it does not create new object references for the items inside the array.
If a todo object was mutated before calling setTodos, React will still see the same object references. 
This can cause memoized components, selectors, or effects to skip updates and produce stale UI.

To correctly update state, both the array and any changed objects inside it must receive new references.
*/

// 2. What breaks if you mutate a todo object but return a new array?

/* 
Mutating a todo object while returning a new array breaks referential equality for that object.
React and memoization tools (React.memo, useMemo, useCallback) rely on object identity to detect changes. 
If the object reference stays the same, React may not re-render components or recompute derived values, leading to inconsistent or stale UI.

This creates bugs that are difficult to reproduce and debug.
*/

// 3. Why does React care about object identity?

/* 
React uses reference equality (===) to efficiently detect changes in props and state.
Deep comparisons would be too slow, so React assumes that if a reference changed, the data changed.
Because of this, React requires developers to return new references for changed data and preserve references for unchanged data.

Correct object identity enables predictable rendering, memoization, and performance optimizations.
 */