"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      reset(); // сброс клиентского состояния
      router.refresh(); // перезагрузка серверных данных
    });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-3 p-5 bg-red-800">
      <h1 className="text-3xl">{error.message}</h1>
      <button
        onClick={handleRetry}
        className="text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
      >
        Перезагрузить
      </button>
    </div>
  );
}
