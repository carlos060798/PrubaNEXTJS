"use client"
 import { useRouter } from "next/navigation"
function CardList({ posts }) {
   const router = useRouter()
  return (
    <div className="flex flex-wrap">
    {posts.map((post) => (
      <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">
              {post.id} - {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              onClick={() => router.push(`/post/${post.id}`)}
            >
              Ver comentarios
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default CardList;