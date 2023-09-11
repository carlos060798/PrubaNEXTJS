async function getPost(page) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    const data = await response.json();
    return data;
  }
  
  export default getPost;