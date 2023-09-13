import { useEffect, useState } from 'react';
import getPost from '@/helpers/fetchPost';

function useClient() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetchData(currentPage, selectedUserId);
  }, [currentPage, selectedUserId]);

  const fetchData = async (page, userId) => {
    try {
      const data = await getPost(page, userId);
      const totalPages = Math.ceil(data.length / postsPerPage);
      setPosts(data.slice((page - 1) * postsPerPage, page * postsPerPage));
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserButtonClick = (userId) => {
    setSelectedUserId(userId);
    setCurrentPage(1); // Volver a la primera página al cambiar el usuario
  };

  return {
    currentPage,
    posts,
    selectedUserId,
    handleUserButtonClick,
  };
}

export default useClient;
