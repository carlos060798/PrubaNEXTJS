"use client"
import { useEffect, useState } from 'react';
import CardList from '@/components/Cardslist';
import getPost from '@/helpers/fetchPost';
import Pagination from '@/components/Paginacion';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState(1);

  useEffect(() => {
    fetchData(currentPage, selectedUserId);
  }, [currentPage, selectedUserId]);

  const fetchData = async (page, userId) => {
    const data = await getPost(page, userId);
    const totalPostsPerPage = 10;
    const totalPages = Math.ceil(data.length / totalPostsPerPage);
    setPosts(data.slice((page - 1) * totalPostsPerPage, page * totalPostsPerPage));
    setTotalPages(totalPages);
  };

  const handleonChange = (page) => {
    setCurrentPage(page);
  };

  const handleUserButtonClick = (userId) => {
    setSelectedUserId(userId);
    setCurrentPage(1); // Volver a la primera página al cambiar el usuario
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Lista de publicaciones</h1>
      <div className="flex justify-center space-x-2 mb-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((userId) => (
          <button
            key={userId}
            onClick={() => handleUserButtonClick(userId)}
            className={`px-4 py-2 rounded ${
              selectedUserId === userId ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {userId}
          </button>
        ))}
      </div>
      <CardList posts={posts} />
      <Pagination totalPages={totalPages} handleonChange={handleonChange} />
    </div>
  );
};

export default HomePage;
