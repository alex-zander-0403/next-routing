// 'use server'
import Link from "next/link";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <div className="mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Роутинг в Next.js</h1>
        <p className="text-xl">Главная страница</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/blog"
          className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Блог (Static Routes)
        </Link>

        <Link
          href="/products"
          className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Продукты (Dynamic Routes)
        </Link>

        <Link
          href="/posts"
          className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Посты (Dynamic Nested Routes)
        </Link>

        <Link
          href="/docs"
          className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Документация (Catch-all Segments)
        </Link>

        <Link
          href="/login"
          className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Авторизация (Active Link)
        </Link>

        <Link
          href="/news"
          className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Новости (Search Params)
        </Link>
      </div>
    </div>
  );
}

export default Home;
