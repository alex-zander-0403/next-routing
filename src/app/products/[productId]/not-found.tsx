"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFoundProduct() {
  //
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const productIndex = pathSegments[2];

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="w-full text-center p-10 space-y-5">
        <h1 className="text-3xl">ID больше 100... Продукт {productIndex} не найден</h1>
        <h1 className="text-9xl">😐</h1>
      </div>

      <div className="flex justify-center items-center gap-5">
        <Link
          href="/"
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
