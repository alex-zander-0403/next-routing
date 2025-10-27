import Link from "next/link";

async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  //
  const { postId } = await params;

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json());

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h2 className="text-3xl">Это пост номер {postId}</h2>
        <p className="text-xl">Первый уровень вложенности!</p>
        <p>{post.body}</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href={`/posts/${postId}/comments`}
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-amber-700 hover:bg-amber-500 transition-all"
        >
          Комментарии
        </Link>

        <Link
          href="/posts"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          К постам
        </Link>

        <Link
          href="/"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

export default PostPage;
