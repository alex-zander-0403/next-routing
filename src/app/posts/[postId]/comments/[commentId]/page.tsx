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
    <div className="flex justify-center items-center flex-col p-10 gap-3 m-10 rounded border-2 border-red-800 bg-gray-700 ">
      <h2 className="text-3xl">
        Это комментарий {comment.id} поста номер {postId}
      </h2>
      <p className="text-xl">Второй уровень вложенности!</p>
      <p>{comment.body}</p>
    </div>
  );
}

export default CommentPage;
