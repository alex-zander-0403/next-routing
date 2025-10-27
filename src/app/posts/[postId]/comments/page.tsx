import Link from "next/link";

async function Comments({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then((res) => res.json());

  console.log("-->", comments);

  return (
    <div className="flex justify-center items-center flex-col p-10 gap-3 m-10 ">
      <h2 className="text-3xl">Это комментарии поста номер {postId}</h2>
      <p className="text-xl">Второй уровень вложенности!</p>

      {comments.map((comment) => (
        <div key={comment.id} className="p-5 rounded-xl text-black bg-gray-500">
          <p className="font-bold text-red-900">{comment.email}</p>
          <p>{comment.body}</p>
          <Link href={`/posts/${postId}/comments/${comment.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default Comments;
