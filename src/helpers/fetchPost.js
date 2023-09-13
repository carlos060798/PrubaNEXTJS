async function getPost(page, userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&userId=${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
}
export default getPost;
