import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  //
  const { productId } = await params;

  return {
    title: `Продукт ${productId}`,
    description: `Описание продукта ${productId}`,
  };
};

async function ProductDetails({ params }: Props) {
  const { productId } = await params;

  if (parseInt(productId) > 100) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center flex-col gap-30 p-20">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className=" text-4xl font-bold ">Продукт {productId}</h1>
        <p className="text-xl">Здесь описание и фото</p>
        <p className="text-xl">
          Можно ввести id продукта вручную в URL, но не больше 100
        </p>
        <p className="text-xl">Иначе сработает not-found раздела!</p>
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
