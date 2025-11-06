import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ language?: "ru" | "en" | "de" | undefined }>;
}) {
  //
  const { articleId } = await params;
  const { language = "ru" } = await searchParams;

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="mt-20 w-full text-center space-y-5">
        Вы читаете новость №{articleId} на {language}
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
