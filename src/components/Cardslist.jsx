"use client"
 import { useRouter } from "next/navigation"
function CardList({ posts }) {
   const router = useRouter()
  return (
    <div className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                {post.id} {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
            <div className="p-4 border-t border-gray-300">
              <button  className="text-blue-500 hover:underline" onClick={()=>router.push(`/post/${post.id}`)}>
                Más información
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;