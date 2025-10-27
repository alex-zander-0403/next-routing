import Link from "next/link";

async function CommentPage({
  params,
}: {
  params: Promise<{ postId: string; commentId: string }>;
}) {
  const { postId, commentId } = await params;

  const comment = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}?postId=${postId}`
  ).then((res) => res.json());

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="w-full text-center p-10 space-y-5">
        <h2 className="text-3xl">
          Это комментарий {comment.id} поста номер {postId}
        </h2>
        <p className="text-xl">Второй уровень динамической вложенности!</p>
      </div>

      <div className="flex justify-center items-start flex-col w-100 gap-3 p-5 border-1 border-gray-700 rounded-xl">
        <p>Автор: {comment.email}</p>
        <p>id комментария: {comment.id}</p>
        <p>Комментарий: {comment.body}</p>
      </div>

      <div className="flex justify-center items-center gap-5">
        <Link
          href="/"
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>

        <Link
          href={`/posts/${postId}/comments`}
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Назад
        </Link>
      </div>
    </div>
  );
}

export default CommentPage;
