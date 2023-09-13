async function getDetailPost(post_id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
}
export default getDetailPost;
