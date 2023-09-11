async function getPost(page, userId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&userId=${userId}`
    );
    const data = await response.json();
    return data;
  }
  
  export default getPost;