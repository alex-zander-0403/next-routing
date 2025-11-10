"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div>
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold">ошибка global-error!</h2>
            <p className="text-3xl">{error.message}</p>
          </div>
          <button
            onClick={() => reset()}
            className="w-150 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-600 transition-all"
          >
            перезагрузка приложения
          </button>
        </div>
      </body>
    </html>
  );
}
