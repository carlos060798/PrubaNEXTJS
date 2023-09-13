import getDetailPost from "@/helpers/fetchDetailPost";

async function PostPage({ params }) {
  const { id } = params;
  const post = await getDetailPost(id);

  return (
    <>
      <h1 className="text-2xl font-extrabold my-4 text-center text-blue-500">
        Comentarios del Post número # {id}
      </h1>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-x-2 md:space-y-0 mb-4">
        {post.map((comment) => (
          <div key={comment.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-center text-blue-500 mb-2">
                  {comment.id} {""} Autor: <span className="text-gray-800 ">{comment.name}</span>
                </h2>
                <p className="text-gray-950 mb-1 font-bold">Email: <span className="text-gray-800 font-normal"> {comment.email}</span></p>
                <p className="text-gray-950 text-justify font-bold">
                  Comentario: <span className="text-gray-800 font-normal">{comment.body}</span>
                </p>
              </div>
              <div className="p-4 border-t border-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostPage;















