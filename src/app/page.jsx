"use client"
import React from 'react';
import CardList from '@/components/Cardslist';
import useClient from './hooks/useClient';

function HomePage() {
  const { posts, selectedUserId, handleUserButtonClick } = useClient();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Lista de publicaciones</h1>
      <div className="flex justify-center space-x-2 mb-4">
        {Array.from({ length: 10 }, (_, userId) => (
          <button
            key={userId + 1}
            onClick={() => handleUserButtonClick(userId + 1)}
            className={`px-4 py-2 rounded ${
              selectedUserId === userId + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {userId + 1}
          </button>
        ))}
      </div>
      <CardList posts={posts} />
    </div>
  );
}

export default HomePage;
