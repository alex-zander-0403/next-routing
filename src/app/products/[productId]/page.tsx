import Link from "next/link";

async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string; category: string }>;
}) {
  //   const productId = (await params).productId;
  const { productId } = await params;

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="fixed top-0 mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">Продукт {productId}</h1>
        <p className="text-xl">Здесь описание продукта и его фото</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <Link
          href="/products"
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

export default ProductDetails;
