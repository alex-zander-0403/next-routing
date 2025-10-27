// 'use server'
import Link from "next/link";

function Posts() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Посты:</h1>
        <p className="text-xl">
          Здесь реализованы вложенные динамические маршруты (Dynamic Routes)
        </p>
        <p className="text-xl">Это родительский компонент posts</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/posts/1"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          <p>Первый пост</p>
          <p>JS с нуля</p>
        </Link>

        <Link
          href="/posts/2"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          <p>Второй пост</p>
          <p>React для современных приложений</p>
        </Link>

        <Link
          href="/posts/3"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          <p>Третий пост</p>
          <p>Next как перспектива</p>
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

export default Posts;
