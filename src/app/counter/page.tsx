import Link from "next/link";
import Counter from "./Counter";

export const metadata = {
  title: "Счетчик",
  description: "Данные из счетчика",
};

export default function CounterPage() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="mt-20 w-full text-center space-y-5">
        Серверная часть компонента counter
      </div>

      <Counter />

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
