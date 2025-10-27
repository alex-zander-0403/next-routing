async function Docs({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log("slug ->", slug);

  return;
}

export default Docs;
