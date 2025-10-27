import Link from "next/link";

async function Comments({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((res) => res.json());

  console.log("-->", comments);

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="w-full text-center p-10 space-y-5">
        <h2 className="text-3xl">Это комментарии поста номер {postId}</h2>
      </div>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col px-5 py-3 w-200 gap-1 rounded-xl text-black bg-gray-500"
        >
          <p className="font-bold text-blue-900">{comment.email}</p>
          <p>{comment.body}</p>

          <div className="flex justify-end mt-2">
            <Link
              href={`/posts/${postId}/comments/${comment.id}`}
              className="flex justify-end p-2 rounded bg-gray-600 hover:bg-gray-400"
            >
              Подробнее
            </Link>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center gap-5">
        <Link
          href="/"
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>

        <Link
          href={`/posts/${postId}`}
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Назад
        </Link>
      </div>
    </div>
  );
}

export default Comments;
