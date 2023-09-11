import getDetailPost from "@/helpers/fetchDetailPost";

async function PostPage({ params }) {
  const { id } = params;
  const post= await getDetailPost(id)
  
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Comentatios del Post numero {id}</h1>
        <div className="flex flex-wrap">
      {post.map((coment) => (
        <div key={coment.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                {coment.id} {""} Autor: <span> {coment.name}</span> 
              </h2>
              <p className="text-gray-600">{coment.body}</p>
            </div>
            <div className="p-4 border-t border-gray-300">
             
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default PostPage;
