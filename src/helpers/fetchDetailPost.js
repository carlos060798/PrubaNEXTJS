async function getDetailPost(post_id) {
 const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post_id}`)
const data = await response.json();
 return data;
}
export default getDetailPost;