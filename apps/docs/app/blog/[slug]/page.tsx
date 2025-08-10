export default async function BlogPost({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  return (
    <div>
      <h1>Blog Post - Coming Soon {slug}</h1>
    </div>
  );
}
