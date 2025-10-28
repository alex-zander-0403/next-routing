import Link from "next/link";

async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  let mySlug = "";

  if (!slug || slug.length === 0) {
    return <h1>Главная страница документации</h1>;
  }

  if (slug.length === 1) {
    mySlug = `Раздел ${slug[0]}`;
  }

  if (slug.length === 2) {
    mySlug = `Подраздел ${slug[1]} в разделе ${slug[0]}`;
  }

  if (slug.length === 3) {
    mySlug = `Категория ${slug[2]} подраздел ${slug[1]} в разделе ${slug[0]}`;
  }

  if (slug.length > 3) {
    mySlug = `Глубокая вложенность: docs/${slug.join("/")}`;
  }

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <div className="w-full text-center p-10 space-y-5">
        <h1 className="text-3xl">{mySlug}</h1>
      </div>

      <div className="flex justify-center items-center gap-5">
        <Link
          href="/"
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-red-900 hover:bg-red-700 transition-all"
        >
          На главную
        </Link>

        <Link
          href={`/docs`}
          className="w-50 text-center px-8 py-2 text-2xl rounded bg-gray-700 hover:bg-gray-500 transition-all"
        >
          Назад
        </Link>
      </div>
    </div>
  );
}

export default Docs;
