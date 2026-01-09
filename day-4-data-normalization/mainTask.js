const comments = [
  { id: 1, postId: 1, author: "Anna", text: "Nice post" },
  { id: 2, postId: 1, author: "Boris", text: "I agree" },
  { id: 3, postId: 2, author: "Anna", text: "Interesting" },
  { id: 4, postId: 1, author: "Carmen", text: "Well written" },
  { id: 5, postId: 2, author: "Boris", text: "Thanks!" }
];

// Task 1

const groupCommentsByPost = (comments) => {
    return comments.reduce((newObj, comment) => {
        const commentPostId = comment.postId;
        const postArr = newObj[commentPostId]
        if (postArr) {
            newObj[commentPostId].push({id: comment.id, author: comment.author, text: comment.text}) 
        } else {
            newObj[commentPostId] = [{id: comment.id, author: comment.author, text: comment.text}]
        }
        return newObj
    }, {})
}

console.log(groupCommentsByPost(comments));

// Task 2

const countCommentsByAuthor = (comments) => {
    return comments.reduce((newObj, comment) => {
        const curCommenter = comment.author;
        newObj[curCommenter] = (newObj[curCommenter] || 0) + 1;
        return newObj
    }, {})
}

console.log(countCommentsByAuthor(comments));

// Bonus

const findMostCommentedPost = (comments) => {
    const commentsByPost = groupCommentsByPost(comments);

    let biggest = 0;
    let mostCommentedPost = '';

    for (const postId in commentsByPost) {
        const quantity = commentsByPost[postId];
        if (quantity.length > biggest) {
            biggest = quantity.length
            mostCommentedPost = postId;
        }
    }

    return mostCommentedPost;
}

console.log(findMostCommentedPost(comments));

// We use reduce because we need to group items, which requires accumulating values under dynamic keys (postId, author). Map cannot do this because it produces a 1-to-1 output, while grouping is many-to-one. We can mutate the objects that we create because there is no reference to them.
// We mutate the accumulator object and arrays created inside reduce. This is safe because they are created during the reduction and are not shared or referenced elsewhere. Mutating them does not affect React state or input data.
// Mutating input data breaks referential equality. React relies on reference changes to detect updates. If we mutate existing objects, React may skip rerenders or reuse stale UI.