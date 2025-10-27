import Link from "next/link";

const SecondBlog = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">О работе</h1>
        <p className="text-xl">
          Здесь я рассказываю о том как много у меня сложной работы и чтоб вы
          вообще без меня делали!
        </p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/blog"
          className="px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Назад
        </Link>

        <Link
          href="/"
          className="px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>
      </div>
    </div>
  );
};

export default SecondBlog;
