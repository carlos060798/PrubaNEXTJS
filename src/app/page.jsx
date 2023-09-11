"use client"
import { useEffect, useState } from 'react';
import CardList from '@/components/Cardslist';
import getPost from '@/helpers/fetchPost';
import Pagination from '@/components/Paginacion';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    const data = await getPost(page);
    const totalPostsPerPage = 10; // Número de elementos por página
    const totalPages = Math.ceil(data.length / totalPostsPerPage);
    setPosts(data);
    setTotalPages(totalPages);
  };

  const handleonChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Lista de publicaciones</h1>
      <CardList posts={posts} />
      <Pagination totalPages={totalPages} handleonChange={handleonChange} />
    </div>
  );
};

export default HomePage;