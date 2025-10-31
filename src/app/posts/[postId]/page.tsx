import Link from "next/link";
import { Metadata } from "next";

// структура данных поста с API
interface Post {
  id: number;
  title: string;
  body: string;
}

// тип для объекта params от динамического родительского компонента
type Props = {
  params: Promise<{ postId: string }>;
};

// fetch функция для получения данных
export const getPost = async (id: string): Promise<Post> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) throw new Error(`Ошибка ответа сервера`);
    return await res.json();
  } catch (error) {
    console.error(`Не удалось получить данные: ${id}`, error);
  }
};

// функция генератор метаданных
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { postId } = await params;
  const post = await getPost(postId);

  // формирование метаданных
  return {
    title: `Пост ${postId} | ${post.title}`,
    description: post.body.slice(0, 160),
  };
};

// экспорт асинхронного компонента с типизированными пропсами
async function PostPage({ params }: Props) {
  const { postId } = await params;

  const post = await getPost(postId);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h2 className="text-3xl">Это пост номер {postId}</h2>
        <p className="text-xl">Первый уровень динамической вложенности!</p>
        <p>{post.body}</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href={`/posts/${postId}/comments`}
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-amber-700 hover:bg-amber-500 transition-all"
        >
          Все комментарии
        </Link>

        <Link
          href="/posts"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Назад
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
