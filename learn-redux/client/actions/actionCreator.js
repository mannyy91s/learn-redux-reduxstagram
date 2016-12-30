//increment
export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comments
export function addComment(postId, comment, author) {
    type: 'ADD_COMMENT',
    postId,
    comment,
    author
}
//remove comments
export function removeComment(postId, i) {
    type: 'REMOVE_COMMENT',
    i,
    postId
}
