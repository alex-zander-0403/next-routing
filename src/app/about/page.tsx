// import { Metadata } from "next";
import Link from "next/link";

export const metadata = {
  title: { absolute: "О компании" },
  description:
    "Контактная информация: телефон, адрес, email, предоставляемые услуги",
};

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="mt-20 w-full text-center space-y-5">
        <h1 className=" text-4xl font-bold ">О нас</h1>
        <p className="text-xl">+7 111 123 45 67</p>
        <p className="text-xl">Москва, Лиговский проспект 1</p>
        <p className="text-xl">email: next@gmail.com</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
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
