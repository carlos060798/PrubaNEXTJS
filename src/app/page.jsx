"use client";
import React from "react";
import CardList from "@/components/Cardslist";
import useClient from "./hooks/useClient";

function HomePage() {
  const { posts, selectedUserId, handleUserButtonClick } = useClient();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center mb-4 text-blue-600">
        Listado de posts de JSONPlaceholder
      </h1>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-x-2 md:space-y-0 mb-4">
        {Array.from({ length: 10 }, (_, userId) => (
          <button
            key={userId + 1}
            onClick={() => handleUserButtonClick(userId + 1)}
            className={`px-4 py-2 rounded ${
              selectedUserId === userId + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
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
