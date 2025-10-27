import Link from "next/link";

function Products() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-3">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Продукты:</h1>
        <p className="text-xl">
          Здесь реализованы динамические маршруты (Dynamic Routes)
        </p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="products/15"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          продукт 15
        </Link>

        <Link
          href="products/22"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          продукт 22
        </Link>

        <Link
          href="products/31"
          className="w-100 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          продукт 31
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

export default Products;
