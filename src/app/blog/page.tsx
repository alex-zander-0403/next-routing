// 'use server'
import Link from "next/link";

function Blog() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Мой блог :3</h1>
        <p className="text-xl">Здесь реализована вложенная маршрутизация (Static Routes)</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/blog/first"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Первый блог - О себе
        </Link>

        <Link
          href="/blog/second"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Второй блог - О работе
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

export default Blog;
