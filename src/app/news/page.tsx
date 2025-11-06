import Link from "next/link";

export default function News() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="mt-20 w-full text-center space-y-5">
        Параметры поиска для управления состоянием в URL
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="news/articles/news?language=ru"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-900 hover:bg-gray-700 transition-all"
        >
          Русский
        </Link>

        <Link
          href="news/articles/news?language=en"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-900 hover:bg-gray-700 transition-all"
        >
          English
        </Link>

        <Link
          href="news/articles/news?language=de"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-900 hover:bg-gray-700 transition-all"
        >
          Deutch
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
