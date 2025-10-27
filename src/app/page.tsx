// 'use server'
import Link from "next/link";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Роутинг в Next.js</h1>
        <p className="text-xl">Главная страница</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/blog"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Блог (Nested Routes)
        </Link>

        <Link
          href="/products"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Продукты (Dynamic Routes)
        </Link>

        <Link
          href="/posts"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
        >
          Посты
        </Link>
      </div>
    </div>
  );
}

export default Home;
